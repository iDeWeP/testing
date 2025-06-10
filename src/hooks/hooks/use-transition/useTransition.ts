import { useState, useCallback, useMemo } from 'react';

export const Transition = {
  ENTERED: 0,
  EXITED: 1,
  EXITING: 2,
  ENTERING: 3
};

export const useTransition = (isEntered?: boolean) => {
  const [transition, setTransition] = useState(
    isEntered ? Transition.ENTERED : Transition.EXITED
  );

  const startTransition = useCallback(
    (isOpen: boolean) =>
      setTransition((prevState) => {
        if (isOpen) {
          return prevState === Transition.EXITED ||
            prevState === Transition.EXITING
            ? Transition.ENTERING
            : prevState;
        }

        return prevState === Transition.ENTERED ||
          prevState === Transition.ENTERING
          ? Transition.EXITING
          : prevState;
      }),
    []
  );

  const stopTransition = useCallback(
    () =>
      setTransition((prevState) => {
        if (prevState === Transition.ENTERING) {
          return Transition.ENTERED;
        }

        if (prevState === Transition.EXITING) {
          return Transition.EXITED;
        }

        return prevState;
      }),
    []
  );

  return useMemo(
    () => ({
      state: transition,
      isEntered: transition === Transition.ENTERED,
      isEntering: transition === Transition.ENTERING,
      isExited: transition === Transition.EXITED,
      isExiting: transition === Transition.EXITING,
      isActive:
        transition === Transition.ENTERING || transition === Transition.EXITING,
      isIdle:
        transition === Transition.ENTERED || transition === Transition.EXITED,
      startTransition,
      stopTransition
    }),
    [transition, startTransition, stopTransition]
  );
};
