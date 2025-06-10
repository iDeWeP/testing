import { useState, useCallback, useMemo } from 'react';

export const useWindowSize = () => {
  const [windowSize, resize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const setWindowSize = useCallback(
    () => resize({ width: window.innerWidth, height: window.innerHeight }),
    []
  );

  return useMemo(
    () => ({ windowSize, setWindowSize }),
    [windowSize, setWindowSize]
  );
};
