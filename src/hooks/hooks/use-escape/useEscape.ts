import { useEffect } from 'react';

export const useEscape = (
  handler?: VoidFunction,
  options?: boolean | AddEventListenerOptions
) =>
  useEffect(() => {
    if (!handler) {
      return;
    }

    const handleKeyDown = ({ key }: KeyboardEvent) => {
      if (key === 'Escape') {
        handler();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handler, options]);
