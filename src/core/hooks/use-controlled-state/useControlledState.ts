import { useState, useCallback } from 'react';

export const useControlledState = (
  defaultOpen: boolean,
  controlledOpen?: boolean,
  onOpen?: VoidFunction,
  onClose?: VoidFunction
) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleOpen = useCallback(() => setIsOpen(true), []);

  const handleClose = useCallback(() => setIsOpen(false), []);

  const isControlled = controlledOpen !== undefined;

  return {
    isOpen: controlledOpen ?? isOpen,
    handleOpen: isControlled ? onOpen : handleOpen,
    handleClose: isControlled ? onClose : handleClose
  };
};
