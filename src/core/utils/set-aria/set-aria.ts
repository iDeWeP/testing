import type { ElementType } from 'react';
import type { Orientation } from '../../types';

type Values = {
  element?: ElementType;
  isInvalid?: boolean;
  isDisabled?: boolean;
  min?: number;
  max?: number;
  value?: number;
  orientation?: Orientation;
};

const types = {
  button: ({ element, isDisabled }: Values) =>
    element !== 'button' && {
      role: 'button',
      ...(isDisabled ? { 'aria-disabled': true } : { tabIndex: 0 })
    },
  divider: ({ orientation }: Values) => ({
    role: 'separator',
    'aria-orientation': (orientation === 'row' ? 'horizontal' : 'vertical') as
      | 'horizontal'
      | 'vertical'
  }),
  icon: () => ({ 'aria-hidden': true }),
  input: ({ isInvalid }: Values) => ({ 'aria-invalid': !!isInvalid }),
  linearProgress: ({ min, max, value }: Values) => ({
    role: 'progressbar',
    'aria-valuemin': min,
    'aria-valuemax': max,
    'aria-valuenow': value
  })
};

export const setAria = (type: keyof typeof types, values: Values = {}) =>
  types[type](values);
