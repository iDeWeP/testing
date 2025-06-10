import type { SyntheticEvent } from 'react';

export const combineHandlers =
  <T extends SyntheticEvent>(
    ...handlers: ((event: T) => void | undefined)[] // CHECK TYPES !!!
  ) =>
  (event: T) =>
    handlers.forEach((handler) => {
      if (handler) {
        handler(event);
      }
    });
