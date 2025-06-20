import { useState, useCallback, useMemo } from 'react';

export const useResize = () => {
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
