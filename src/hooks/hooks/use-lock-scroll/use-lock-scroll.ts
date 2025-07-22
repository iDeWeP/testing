import { useEffect } from 'react';

export const useLockScroll = (isLocked: boolean): void =>
  useEffect((): VoidFunction => {
    document.body.style.overflow = isLocked ? 'hidden' : 'auto';

    return (): void => {
      document.body.style.overflow = 'auto';
    };
  }, [isLocked]);
