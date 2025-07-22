import { type MouseEventHandler, useState, useCallback, useMemo } from 'react';
import type { Cursor } from '../../../core/types';

export type UseCursorResult = {
  cursor: Cursor;
  handleCursorMove: MouseEventHandler;
};

export const useCursor = (): UseCursorResult => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleCursorMove = useCallback<MouseEventHandler>(
    (event): void => setCursor({ x: event.clientX, y: event.clientY }),
    []
  );

  return useMemo(
    (): UseCursorResult => ({
      cursor,
      handleCursorMove
    }),
    [cursor, handleCursorMove]
  );
};
