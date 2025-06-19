import { useState, useCallback, useMemo } from 'react';

export const useScroll = () => {
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
