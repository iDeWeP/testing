export interface FormInputConfig {
  value?: string;
  isValid?: boolean;
  error?: boolean;
  validator?: RegExp;
}

export type FormConfig = Record<string, FormInputConfig>;

export interface FormInputState {
  value: string;
  isValid: boolean;
  error: boolean;
}

export type FormInputs = Record<string, FormInputState>;

export interface FormState {
  inputs: FormInputs;
  isFormValid: boolean;
}
