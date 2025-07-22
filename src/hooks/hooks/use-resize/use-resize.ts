import { useState, useCallback, useMemo } from 'react';

export type WindowSize = {
  width: number;
  height: number;
};

export type UseResizeResult = {
  windowSize: WindowSize;
  handleResize: VoidFunction;
};

export const useResize = (): UseResizeResult => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const handleResize = useCallback(
    (): void =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight }),
    []
  );

  return useMemo(
    (): UseResizeResult => ({ windowSize, handleResize }),
    [windowSize, handleResize]
  );
};
