import { type RefObject, useRef, useEffect } from 'react';

export const useCloseFocus = <E extends HTMLElement>(
  focus: RefObject<HTMLElement | null> | boolean,
  ref?: RefObject<E | null>
): void => {
  const isRendered = useRef(false);

  useEffect(() => {
    if (!isRendered.current) {
      isRendered.current = true;

      return;
    }

    if (focus === true) {
      ref?.current?.focus();
    } else if (focus) {
      focus.current?.focus();
    }
  }, [focus, ref]);
};
