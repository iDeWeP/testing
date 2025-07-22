import { type RefObject, type FocusEventHandler, useCallback } from 'react';

export const useFocusHandler = <T extends HTMLElement>(
  ref?: RefObject<HTMLInputElement | HTMLTextAreaElement | null>
): FocusEventHandler<T> | undefined => {
  const handleFocus = useCallback<FocusEventHandler<T>>(
    (event): void => {
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
