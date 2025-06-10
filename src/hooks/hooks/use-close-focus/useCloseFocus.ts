import { useEffect, type RefObject } from 'react';

// CHECK TYPES !!!
export const useCloseFocus = <E extends HTMLElement>(
  elRef?: RefObject<E | null>
) => {
  useEffect(() => {
    if (elRef?.current) {
      elRef.current.focus();
    }
  }, [elRef]);
};
