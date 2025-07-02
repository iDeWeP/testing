import { useState, useCallback, useMemo } from 'react';

export type Animation = {
  state: number;
  isEntered: boolean;
  isEntering: boolean;
  isExited: boolean;
  isExiting: boolean;
  isActive: boolean;
  isIdle: boolean;
};

const ENTERED = 0;
const EXITED = 1;
const EXITING = 2;
const ENTERING = 3;

export const useAnimation = (isEntered?: boolean) => {
  const [animation, setAnimation] = useState(isEntered ? ENTERED : EXITED);

  const startAnimation = useCallback(
    (isOpen: boolean) =>
      setAnimation((prevState) => {
        if (isOpen) {
          return prevState === EXITED || prevState === EXITING
            ? ENTERING
            : prevState;
        }

        return prevState === ENTERED || prevState === ENTERING
          ? EXITING
          : prevState;
      }),
    []
  );

  const stopAnimation = useCallback(
    () =>
      setAnimation((prevState) => {
        if (prevState === ENTERING) {
          return ENTERED;
        } else if (prevState === EXITING) {
          return EXITED;
        }

        return prevState;
      }),
    []
  );

  return useMemo(
    () => ({
      animation: {
        state: animation,
        isEntered: animation === ENTERED,
        isEntering: animation === ENTERING,
        isExited: animation === EXITED,
        isExiting: animation === EXITING,
        isActive: animation === ENTERING || animation === EXITING,
        isIdle: animation === ENTERED || animation === EXITED
      },
      startAnimation,
      stopAnimation
    }),
    [animation, startAnimation, stopAnimation]
  );
};
