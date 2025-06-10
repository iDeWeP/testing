import { type FormState, type FormInputs } from '../useForm.types';

export default (prevState: FormState): FormState => {
  const inputs: FormInputs = {};

  for (const key in prevState.inputs) {
    inputs[key] = { ...prevState.inputs[key] };
  }

  return {
    ...prevState,
    inputs
  };
};
