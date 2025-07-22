import { useState, useCallback, useMemo } from 'react';

export type Scroll = {
  top: number;
  left: number;
};

export type UseScrollResult = {
  scroll: Scroll;
  handleScroll: VoidFunction;
};

export const useScroll = (): UseScrollResult => {
  const [scroll, setScroll] = useState({
    top: window.scrollY,
    left: window.scrollX
  });

  const handleScroll = useCallback(
    (): void => setScroll({ top: window.scrollY, left: window.scrollX }),
    []
  );

  return useMemo(
    (): UseScrollResult => ({ scroll, handleScroll }),
    [scroll, handleScroll]
  );
};
