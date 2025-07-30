import {
  type KeyboardEventHandler,
  type ElementType,
  useCallback
} from 'react';
import { combineHandlers } from '../../../utils/utils/combine-handlers/combine-handlers';

type Handlers = {
  onClick?: VoidFunction;
  onKeyDown?: KeyboardEventHandler;
};

export const useHandlers = (
  element: ElementType,
  onClick?: VoidFunction,
  onKeyDown?: KeyboardEventHandler,
  isClickable: boolean = true
): Handlers => {
  const handleKeyDown = useCallback<KeyboardEventHandler>(
    (event): void => {
      if ((event.key === 'Enter' || event.key === ' ') && onClick) {
        event.preventDefault();
        onClick();
      }
    },
    [onClick]
  );

  return {
    onClick,
    onKeyDown:
      element === 'button' || !isClickable
        ? onKeyDown
        : combineHandlers(onKeyDown, handleKeyDown)
  };
};
