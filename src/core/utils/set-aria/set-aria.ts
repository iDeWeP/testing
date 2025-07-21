import type { ElementType } from 'react';
import type { Orientation } from '../../types';

type Values = {
  element?: ElementType;
  invalid?: boolean;
  disabled?: boolean;
  min?: number;
  max?: number;
  value?: number;
  orientation?: Orientation;
};

const types = {
  button: ({ element, disabled }: Values) =>
    element !== 'button' && {
      role: 'button',
      ...(disabled ? { 'aria-disabled': true } : { tabIndex: 0 })
    },
  divider: ({ orientation }: Values) => ({
    role: 'separator',
    'aria-orientation': (orientation === 'row' ? 'horizontal' : 'vertical') as
      | 'horizontal'
      | 'vertical'
  }),
  icon: () => ({ 'aria-hidden': true }),
  input: ({ invalid }: Values) => ({ 'aria-invalid': !!invalid }),
  linearProgress: ({ min, max, value }: Values) => ({
    role: 'progressbar',
    'aria-valuemin': min,
    'aria-valuemax': max,
    'aria-valuenow': value
  }),
  switch: () => ({ role: 'switch' })
};

export const setAria = (type: keyof typeof types, values: Values = {}) =>
  types[type](values);
