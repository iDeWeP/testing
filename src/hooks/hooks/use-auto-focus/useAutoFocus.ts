import { type RefObject, useEffect } from 'react';
import { getFocusableElements } from '../../../utils/utils/get-focusabled-elements/getFocusableElements';

// CHECK TYPES !!!
export const useAutoFocus = <E extends HTMLElement>(
  elRef?: RefObject<E | null>,
  auto = true
): void =>
  useEffect(() => {
    if (!elRef?.current) {
      return;
    }

    if (auto) {
      const focusableEls = getFocusableElements(elRef.current);

      if (!focusableEls) {
        return;
      }

      focusableEls[0].focus();
    } else {
      elRef.current.focus();
    }
  }, [elRef, auto]);
