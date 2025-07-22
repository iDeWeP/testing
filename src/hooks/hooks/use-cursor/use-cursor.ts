import { type MouseEventHandler, useState, useCallback, useMemo } from 'react';

export type Cursor = {
  x: number;
  y: number;
};

export type UseCursorResult = {
  cursor: Cursor;
  handleCursorMove: MouseEventHandler;
};

export const useCursor = (): UseCursorResult => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleCursorMove = useCallback<MouseEventHandler>(
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
