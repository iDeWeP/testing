import { useEffect } from 'react';

const useStartAnimation = (
  isOpen: boolean,
  startAnimation: (isOpen: boolean) => void
) => useEffect(() => startAnimation(isOpen), [isOpen, startAnimation]);

export default useStartAnimation;
