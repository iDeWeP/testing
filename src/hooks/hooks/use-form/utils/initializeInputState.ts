import { type FormInputConfig, type FormInputState } from '../useForm.types';

export default (config?: FormInputConfig): FormInputState => ({
  value: config?.value ?? '',
  isValid: config?.isValid ?? false,
  error: config?.error ?? false
});
