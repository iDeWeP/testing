import { useEffect } from 'react';

export const useWindowResize = (
  handler?: ((this: Window, ev: UIEvent) => void) | false,
  options?: boolean | AddEventListenerOptions
): void =>
  useEffect((): VoidFunction | void => {
    if (!handler) {
      return;
    }

    window.addEventListener('resize', handler, options);

    return (): void => window.removeEventListener('resize', handler, options);
  }, [handler, options]);
