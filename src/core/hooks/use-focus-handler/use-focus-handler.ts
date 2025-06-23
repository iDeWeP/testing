import { type RefObject, useCallback } from 'react';
import { setProp } from '../../../utils/utils/set-prop/set-prop';

export const useFocusHandler = <
  T extends HTMLInputElement | HTMLTextAreaElement
>(
  ref?: RefObject<T | null>
) => {
  const handleFocus = useCallback(
    (event: FocusEvent) => {
      if (event.currentTarget === event.target) {
        ref?.current?.focus();
      }
    },
    [ref]
  );

  return setProp(!!ref, handleFocus);
};
