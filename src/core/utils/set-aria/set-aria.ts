import type { ElementType } from 'react';
import type { Orientation } from '../../types';

type Props = {
  element?: ElementType;
  invalid?: boolean;
  disabled?: boolean;
  clickable?: boolean;
  min?: number;
  max?: number;
  value?: number;
  orientation?: Orientation;
};

type SetAria =
  | Record<string, string | number | boolean | undefined>
  | undefined;

type Element =
  | 'button'
  | 'divider'
  | 'icon'
  | 'input'
  | 'linearProgress'
  | 'switch';
type TypeMap = Record<Element, (props: Props) => SetAria>;

const typeMap: TypeMap = {
  button: ({ element, disabled, clickable = true }: Props): SetAria => {
    if (element !== 'button' && clickable) {
      return {
        role: 'button',
        ...(disabled ? { 'aria-disabled': true } : { tabIndex: 0 })
      };
    }
  },
  divider: ({ orientation }: Props): SetAria => ({
    role: 'separator',
    'aria-orientation': (orientation === 'row' ? 'horizontal' : 'vertical') as
      | 'horizontal'
      | 'vertical'
  }),
  icon: (): SetAria => ({ 'aria-hidden': true }),
  input: ({ invalid }: Props): SetAria => ({ 'aria-invalid': !!invalid }),
  linearProgress: ({ min, max, value }: Props): SetAria => ({
    role: 'progressbar',
    'aria-valuemin': min,
    'aria-valuemax': max,
    'aria-valuenow': value
  }),
  switch: (): SetAria => ({ role: 'switch' })
};

export const setAria = (
  type: keyof typeof typeMap,
  prop: Props = {}
): SetAria => typeMap[type](prop);
