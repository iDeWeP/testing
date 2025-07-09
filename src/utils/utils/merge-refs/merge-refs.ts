import type { ComponentRef, ElementType, ForwardedRef } from 'react';

export const mergeRefs =
  <E extends ComponentRef<ElementType>>(
    ...refs: (ForwardedRef<E> | undefined)[]
  ) =>
  (element: E) =>
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    });
