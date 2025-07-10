import type { ElementType } from 'react';

type Values = {
  element?: ElementType;
  isInvalid?: boolean;
};

const types = {
  button: ({ element }: Values) =>
    element === 'button' ? {} : { tabIndex: 0, role: 'button' },
  icon: () => ({ 'aria-hidden': true }),
  input: ({ isInvalid }: Values) => ({ 'aria-invalid': !!isInvalid })
};

export const setAria = (type: keyof typeof types, values: Values = {}) =>
  types[type](values);
