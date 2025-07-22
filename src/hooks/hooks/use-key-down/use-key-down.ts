import { useCallback, type KeyboardEvent } from 'react';

export const useKeyDown = (key: string, handler?: VoidFunction | false) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
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
