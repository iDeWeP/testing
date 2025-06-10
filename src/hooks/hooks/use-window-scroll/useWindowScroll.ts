import { useEffect } from 'react';

export const useWindowScroll = (
  handler?: (this: Document, ev: Event) => void,
  options?: boolean | AddEventListenerOptions
) =>
  useEffect(() => {
    if (!handler) {
      return;
    }

    document.addEventListener('scroll', handler, options);

    return () => document.removeEventListener('scroll', handler);
  }, [handler, options]);
