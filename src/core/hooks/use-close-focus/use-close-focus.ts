import { type RefObject, useRef, useEffect } from 'react';

export const useCloseFocus = <E extends HTMLElement>(
  focus: RefObject<HTMLElement | null> | boolean,
  autoRef?: RefObject<E | null>
) => {
  const isRendered = useRef(false);

  useEffect(() => {
    if (!isRendered.current) {
      isRendered.current = true;

      return;
    }

    if (focus === true) {
      autoRef?.current?.focus();
    } else if (focus) {
      focus.current?.focus();
    }
  }, [focus, autoRef]);
};
