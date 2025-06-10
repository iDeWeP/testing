import { type RefObject, useEffect } from 'react';
import { getFocusableElements } from '../../../utils/utils/get-focusabled-elements/getFocusableElements';

// CHECK TYPES !!!
export const useFocusTrap = <E extends HTMLElement>(
  ref?: RefObject<E | null>,
  options?: boolean | AddEventListenerOptions
) =>
  useEffect(() => {
    if (!ref?.current) {
      return;
    }

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') {
        return;
      }

      const focusableEls = getFocusableElements(ref.current);

      if (!focusableEls) {
        event.preventDefault();

        return;
      }

      const firstEl = focusableEls[0];
      const lastEl = focusableEls[focusableEls.length - 1];

      if (document.activeElement === firstEl && event.shiftKey) {
        event.preventDefault();
        lastEl.focus();
      } else if (document.activeElement === lastEl && !event.shiftKey) {
        event.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener('keydown', handleKeydown, options);

    return () => document.removeEventListener('keydown', handleKeydown);
  }, [ref, options]);
