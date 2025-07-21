import type { ElementType } from 'react';

type Values = {
  element?: ElementType;
  disabled?: boolean;
};

const types = {
  button: ({ element, disabled }: Values) =>
    element === 'button' && {
      disabled,
      type: 'button'
    },
};

export const setProps = (type: keyof typeof types, values: Values = {}) =>
  types[type](values);
