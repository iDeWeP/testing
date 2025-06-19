import { useState, useCallback, useMemo, type MouseEvent } from 'react';

export const useCursor = () => {
  const [cursor, setCursor] = useState({ x: -1, y: -1 });

  const handleCursorMove = useCallback(
    (event: MouseEvent<HTMLElement>) =>
      setCursor({ x: event.clientX, y: event.clientY }),
    []
  );

  return useMemo(
    () => ({
      cursor,
      handleCursorMove
    }),
    [cursor, handleCursorMove]
  );
};
