import { useCallback, type FocusEvent, type RefObject } from 'react';
import { setProp } from '../../../utils/utils/set-prop/set-prop';

export const useFocusHandler = <T extends HTMLElement>(
  ref?: RefObject<HTMLInputElement | HTMLTextAreaElement | null>
) => {
  const handleFocus = useCallback(
    (event: FocusEvent<T>) => {
      if (event.currentTarget === event.target) {
        ref?.current?.focus();
      }
    },
    [ref]
  );

  return setProp(!!ref, handleFocus);
};
