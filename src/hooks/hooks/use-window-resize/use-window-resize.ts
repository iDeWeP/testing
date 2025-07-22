import { useEffect } from 'react';

export const useWindowResize = (
  handler?: ((this: Window, ev: UIEvent) => void) | false,
  options?: boolean | AddEventListenerOptions
): void =>
  useEffect(() => {
    if (!handler) {
      return;
    }

    window.addEventListener('resize', handler, options);

    return () => window.removeEventListener('resize', handler, options);
  }, [handler, options]);
