import type { ForwardedRef } from 'react';

export const mergeRefs =
  <E extends HTMLElement>( // CHECK TYPE !!!
    ...refs: (ForwardedRef<E> | undefined)[]
  ) =>
  (
    element: E // CHECK TYPE !!!
  ) =>
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    });
