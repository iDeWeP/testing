import { type MutableRefObject } from 'react';

import { type FormInputConfig } from '../useForm.types';
import clearTimer from './clearTimer';

export default (
  timers: MutableRefObject<Record<string, number>>,
  config?: FormInputConfig
): void => {
  for (const key in timers.current) {
    clearTimer(timers, key);
  }

  for (const key in config ?? {}) {
    clearTimer(timers, key);
  }
};
