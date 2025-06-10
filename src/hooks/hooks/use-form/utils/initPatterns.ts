import { type FormConfig } from '../useForm.types';

type Patterns = Record<string, RegExp>;

export default (config?: FormConfig): Patterns => {
  if (!config) {
    return {};
  }

  const patterns: Patterns = {};

  for (const key in config) {
    if (config[key].validator) {
      patterns[key] = config[key].validator;
    }
  }

  return patterns;
};
