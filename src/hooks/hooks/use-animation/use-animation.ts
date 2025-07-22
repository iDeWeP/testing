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

export type StartAnimationFunction = (isOpen: boolean) => void;

export type UseAnimationResult = {
  animation: Animation;
  startAnimation: StartAnimationFunction;
  stopAnimation: VoidFunction;
};

const ENTERED = 0;
const EXITED = 1;
const EXITING = 2;
const ENTERING = 3;

export const useAnimation = (isEntered?: boolean): UseAnimationResult => {
  const [animation, setAnimation] = useState(isEntered ? ENTERED : EXITED);

  const startAnimation = useCallback<StartAnimationFunction>(
    (isOpen): void =>
      setAnimation((prevState): number => {
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
    (): void =>
      setAnimation((prevState): number => {
        if (prevState === ENTERING) {
          return ENTERED;
        }

        if (prevState === EXITING) {
          return EXITED;
        }

        return prevState;
      }),
    []
  );

  return useMemo(
    (): UseAnimationResult => ({
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
