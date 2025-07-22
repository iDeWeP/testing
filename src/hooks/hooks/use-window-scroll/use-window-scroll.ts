import { useEffect } from 'react';

export const useWindowScroll = (
  handler?: ((this: Document, ev: Event) => void) | false,
  options?: boolean | AddEventListenerOptions
): void =>
  useEffect(() => {
    if (!handler) {
      return;
    }

    document.addEventListener('scroll', handler, options);

    return () => document.removeEventListener('scroll', handler, options);
  }, [handler, options]);
