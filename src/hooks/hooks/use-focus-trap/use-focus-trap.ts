import { type RefObject, useEffect } from 'react';
import { getFocusableElements } from '../../../utils/utils/get-focusabled-elements/get-focusable-elements';

export const useFocusTrap = <E extends HTMLElement>(
  ref?: RefObject<E | null> | false,
  options?: boolean | AddEventListenerOptions
): void =>
  useEffect(() => {
    if (!ref || !ref.current) {
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

      if (event.shiftKey && document.activeElement === firstEl) {
        event.preventDefault();
        lastEl.focus();
      }

      if (!event.shiftKey && document.activeElement === lastEl) {
        event.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener('keydown', handleKeydown, options);

    return () =>
      document.removeEventListener('keydown', handleKeydown, options);
  }, [ref, options]);
