import { type RefObject, useEffect } from 'react';
import { getFocusableElements } from '../../../utils/utils/get-focusabled-elements/get-focusable-elements';

export const useAutoFocus = <E extends HTMLElement>(
  focus: RefObject<HTMLElement | null> | boolean,
  autoRef: RefObject<E | null>
) =>
  useEffect(() => {
    if (focus === true) {
      const focusableEls = getFocusableElements(autoRef.current);

      if (!focusableEls) {
        return;
      }

      focusableEls[0].focus();
    } else if (focus) {
      focus.current?.focus();
    }
  }, [focus, autoRef]);
