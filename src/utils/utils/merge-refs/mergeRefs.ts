import type { ForwardedRef } from 'react';

// CHECK TYPES !!!
export const mergeRefs =
  <E extends HTMLElement>(...refs: (ForwardedRef<E> | undefined)[]) =>
  (element: E) =>
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    });
