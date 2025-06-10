import { type FormInputs } from '../useForm.types';

export default (inputs: FormInputs): boolean =>
  Object.values(inputs).every((input) => input.isValid);
