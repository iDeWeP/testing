import type { ReactElement, Key } from 'react';
import { createPortal } from 'react-dom';

// CHECK TYPES !!!
export const portElement = (
  el: ReactElement,
  destinationEl?: Element | DocumentFragment | null,
  key?: Key | null
) => (destinationEl ? createPortal(el, destinationEl, key) : el);
