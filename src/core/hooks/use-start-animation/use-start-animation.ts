import { useEffect } from 'react';

export const useStartAnimation = (
  isOpen: boolean,
  startAnimation: (isOpen: boolean) => void
): void =>
  useEffect((): void => startAnimation(isOpen), [isOpen, startAnimation]);
