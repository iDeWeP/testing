import { useEffect } from 'react';

export const useTimer = (handler?: VoidFunction, delay = 1000) =>
  useEffect(() => {
    if (!handler || delay < 0) {
      return;
    }

    const timerId = setTimeout(handler, delay);

    return () => clearTimeout(timerId);
  }, [handler, delay]);
