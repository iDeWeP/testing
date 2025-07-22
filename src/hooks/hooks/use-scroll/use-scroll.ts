import { useState, useCallback, useMemo } from 'react';

export type UseScrollResult = {
  scroll: {
    top: number;
    left: number;
  };
  handleScroll: VoidFunction;
};

export const useScroll = (): UseScrollResult => {
  const [scroll, setScroll] = useState({
    top: window.scrollY,
    left: window.scrollX
  });

  const handleScroll = useCallback(
    () => setScroll({ top: window.scrollY, left: window.scrollX }),
    []
  );

  return useMemo(() => ({ scroll, handleScroll }), [scroll, handleScroll]);
};
