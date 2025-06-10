import { initialTimerId } from '../constants/constants';
import { type FormInputs, type FormConfig } from '../useForm.types';

type Timers = Record<string, number>;

export default (
  inputs: FormInputs,
  config?: FormConfig
): Timers => {
  const timers: Timers = {};

  for (const key in inputs) {
    timers[key] = initialTimerId;
  }

  for (const key in config ?? {}) {
    timers[key] = initialTimerId;
  }

  return timers;
};
