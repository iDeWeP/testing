import { useEffect } from 'react';

export const useTimer = (handler?: TimerHandler | false, delay = 1000): void =>
  useEffect((): VoidFunction | void => {
    if (!handler || delay < 0) {
      return;
    }

    const timerId = setTimeout(handler, delay);

    return (): void => clearTimeout(timerId);
  }, [handler, delay]);
