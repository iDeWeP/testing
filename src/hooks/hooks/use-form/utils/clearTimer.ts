import { type MutableRefObject } from 'react';

import { initialTimerId } from '../constants/constants';

export default (
  timers: MutableRefObject<Record<string, number>>,
  name: string
): void => {
  if (timers.current[name] === initialTimerId) {
    return;
  }

  clearTimeout(timers.current[name]);
  timers.current[name] = initialTimerId;
};
