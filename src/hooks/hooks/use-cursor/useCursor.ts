import { useCallback, useMemo, useState, type MouseEvent } from 'react';

export const useCursor = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

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
