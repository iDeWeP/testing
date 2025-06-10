import type { ReactElement, Key } from 'react';
import { createPortal } from 'react-dom';

export const portElement = (
  el: ReactElement, // CHECK TYPE !!!
  destinationEl?: Element | DocumentFragment | null,
  key?: Key | null
) => (destinationEl ? createPortal(el, destinationEl, key) : el);
