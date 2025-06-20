import type { SyntheticEvent } from 'react';

export const combineHandlers =
  <T extends SyntheticEvent>(
    ...handlers: (((event: T) => void | boolean) | undefined | false)[]
  ) =>
  (event: T) => {
    for (const handler of handlers) {
      if (handler && handler(event) === false) {
        return;
      }
    }
  };
