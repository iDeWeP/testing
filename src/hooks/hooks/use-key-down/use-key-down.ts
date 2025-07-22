import { type KeyboardEventHandler, useCallback } from 'react';

export const useKeyDown = (
  key: string,
  handler?: VoidFunction | false
): KeyboardEventHandler | undefined => {
  const handleKeyDown = useCallback<KeyboardEventHandler>(
    (event): void => {
      if (event.key === key && handler) {
        handler();
      }
    },
    [key, handler]
  );

  if (handler) {
    return handleKeyDown;
  }
};
