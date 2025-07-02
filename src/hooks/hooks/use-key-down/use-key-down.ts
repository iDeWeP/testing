import { useCallback } from 'react';
import { setProp } from '../../../utils/utils/set-prop/set-prop';

export const useKeyDown = (key: string, handler?: VoidFunction | false) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === key && handler) {
        handler();
      }
    },
    [key, handler]
  );

  return setProp(!!handler, handleKeyDown);
};
