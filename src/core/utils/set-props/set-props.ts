import type { ElementType } from 'react';

type Props = {
  element?: ElementType;
  disabled?: boolean;
};

const types = {
  button: ({ element, disabled }: Props) =>
    element === 'button' && {
      disabled,
      type: 'button'
    },
  switch: () => ({ type: 'checkbox' })
};

export const setProps = (type: keyof typeof types, values: Props = {}) =>
  types[type](values);
