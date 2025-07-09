import { type SyntheticEvent, useState, useCallback } from 'react';
import { combineHandlers } from '../../../utils/utils/combine-handlers/combine-handlers';

export const useControlledState = <
  O extends SyntheticEvent,
  C extends SyntheticEvent
>(
  defaultOpen: boolean,
  open?: boolean,
  onOpen?: ((event: O) => void | undefined) | VoidFunction,
  onClose?: ((event: C) => void | undefined) | VoidFunction
) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleOpen = useCallback(() => setIsOpen(true), []);

  const handleClose = useCallback(() => setIsOpen(false), []);

  const isControlled = open !== undefined;

  return {
    isOpen: open ?? isOpen,
    handleOpen: isControlled ? onOpen : combineHandlers(onOpen, handleOpen),
    handleClose: isControlled ? onClose : combineHandlers(onClose, handleClose)
  };
};
