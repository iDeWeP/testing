import type { SyntheticEvent } from 'react';

// CHECK TYPES !!!
export const combineHandlers =
  <T extends SyntheticEvent>(...handlers: ((event: T) => void | undefined)[]) =>
  (event: T) =>
    handlers.forEach((handler) => {
      if (handler) {
        handler(event);
      }
    });
