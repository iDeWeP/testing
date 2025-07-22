import type { ReactNode, Key } from 'react';
import { createPortal } from 'react-dom';

export const portNode = (
  el: ReactNode,
  destinationEl?: Element | DocumentFragment | null,
  key?: Key | null
): ReactNode => (destinationEl ? createPortal(el, destinationEl, key) : el);
