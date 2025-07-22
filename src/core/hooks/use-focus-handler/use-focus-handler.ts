import { useCallback, type FocusEvent, type RefObject } from 'react';

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

  if (ref) {
    return handleFocus;
  }
};
