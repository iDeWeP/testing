import { useEffect } from 'react';

export const useWindowResize = (
  handler: ((this: Window, ev: UIEvent) => void) | false,
  options?: boolean | AddEventListenerOptions
) =>
  useEffect(() => {
    if (!handler) {
      return;
    }

    window.addEventListener('resize', handler, options);

    return () => window.removeEventListener('resize', handler);
  }, [handler, options]);
