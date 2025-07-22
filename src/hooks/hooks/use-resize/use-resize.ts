import { useState, useCallback, useMemo } from 'react';

export type UseResizeResult = {
  windowSize: {
    width: number;
    height: number;
  };
  handleResize: VoidFunction;
};

export const useResize = (): UseResizeResult => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const handleResize = useCallback(
    () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight }),
    []
  );

  return useMemo(
    () => ({ windowSize, handleResize }),
    [windowSize, handleResize]
  );
};
