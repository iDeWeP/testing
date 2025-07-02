import { useState, useCallback } from 'react';
import { combineFunctions } from '../../../utils/utils/combine-functions/combine-functions';

export const useControlledState = (
  defaultOpen: boolean,
  open?: boolean,
  onOpen?: VoidFunction,
  onClose?: VoidFunction
) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleOpen = useCallback(() => setIsOpen(true), []);

  const handleClose = useCallback(() => setIsOpen(false), []);

  const isControlled = open !== undefined;

  return {
    isOpen: open ?? isOpen,
    handleOpen: isControlled ? onOpen : combineFunctions(onOpen, handleOpen),
    handleClose: isControlled ? onClose : combineFunctions(onClose, handleClose)
  };
};
