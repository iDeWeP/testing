import { useState, useCallback, useMemo } from 'react';

export const useScroll = () => {
  const [scroll, resize] = useState({
    top: window.scrollY,
    left: window.scrollX
  });

  const setScroll = useCallback(
    () => resize({ top: window.scrollY, left: window.scrollX }),
    []
  );

  return useMemo(() => ({ scroll, setScroll }), [scroll, setScroll]);
};
