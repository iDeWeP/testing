import { useEffect } from 'react';

export const useStartAnimation = (
  isOpen: boolean,
  startAnimation: (isOpen: boolean) => void
): void => useEffect(() => startAnimation(isOpen), [isOpen, startAnimation]);
