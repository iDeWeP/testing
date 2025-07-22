import { useCallback, useMemo, useState, type MouseEvent } from 'react';

export type HandleCursorMove = (event: MouseEvent<HTMLElement>) => void;

export type UseCursorResult = {
  cursor: {
    x: number;
    y: number;
  };
  handleCursorMove: HandleCursorMove;
};

export const useCursor = (): UseCursorResult => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleCursorMove = useCallback<HandleCursorMove>(
    (event) => setCursor({ x: event.clientX, y: event.clientY }),
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
