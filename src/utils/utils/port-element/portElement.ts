import type { ReactNode, Key } from 'react';
import { createPortal } from 'react-dom';

export const portElement = (
  el: ReactNode,
  destinationEl?: Element | DocumentFragment | null,
  key?: Key | null
) => (destinationEl ? createPortal(el, destinationEl, key) : el);
