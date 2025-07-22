import { useEffect } from 'react';

export const useWindowScroll = (
  handler?: ((this: Document, ev: Event) => void) | false,
  options?: boolean | AddEventListenerOptions
): void =>
  useEffect((): VoidFunction | void => {
    if (!handler) {
      return;
    }

    document.addEventListener('scroll', handler, options);

    return (): void => document.removeEventListener('scroll', handler, options);
  }, [handler, options]);
