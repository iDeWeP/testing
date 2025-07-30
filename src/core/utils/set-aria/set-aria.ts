import type { ElementType } from 'react';
import { setValue } from '../../../utils/utils/set-value/set-value';
import type { Orientation } from '../../types';

type Props = {
  element?: ElementType;
  checked?: boolean;
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
  | 'block'
  | 'button'
  | 'checkbox'
  | 'divider'
  | 'group'
  | 'icon'
  | 'input'
  | 'listItem'
  | 'progress'
  | 'switch'
  | 'toggleButton';
type TypeMap = Record<Element, (props: Props) => SetAria>;

const typeMap: TypeMap = {
  block: ({ disabled }: Props): SetAria => {
    if (disabled) {
      return { 'aria-disabled': true };
    }
  },
  button: ({ element, disabled, clickable = true }: Props): SetAria => {
    if (element !== 'button' && clickable) {
      return {
        role: 'button',
        ...(disabled ? { 'aria-disabled': true } : { tabIndex: 0 })
      };
    }
  },
  checkbox: ({ invalid }: Props): SetAria => {
    if (invalid) {
      return { 'aria-invalid': true };
    }
  },
  divider: ({ orientation }: Props): SetAria => ({
    role: 'separator',
    ...(orientation === 'col' && { 'aria-orientation': 'vertical' })
  }),
  group: ({ orientation }: Props): SetAria => ({
    role: 'group',
    ...(orientation === 'col' && { 'aria-orientation': 'vertical' })
  }),
  icon: (): SetAria => ({ 'aria-hidden': true }),
  input: ({ invalid }: Props): SetAria => {
    if (invalid) {
      return { 'aria-invalid': true };
    }
  },
  listItem: ({ element, checked, disabled, clickable }: Props): SetAria => {
    const isCheckable = checked !== undefined;

    if (element === 'button') {
      return setValue(isCheckable, {
        'aria-pressed': checked
      });
    }

    if (clickable) {
      return {
        role: 'button',
        ...(isCheckable && { 'aria-pressed': checked }),
        ...(disabled ? { 'aria-disabled': true } : { tabIndex: 0 })
      };
    }

    if (isCheckable) {
      return {
        role: 'option',
        'aria-selected': checked,
        ...(disabled ? { 'aria-disabled': true } : { tabIndex: 0 })
      };
    }
  },
  progress: ({ disabled, min, max, value }: Props): SetAria => ({
    role: 'progressbar',
    ...(disabled && { 'aria-disabled': true }),
    'aria-valuemin': min,
    'aria-valuemax': max,
    'aria-valuenow': value
  }),
  switch: ({ invalid }: Props): SetAria => ({
    role: 'switch',
    ...(invalid && { 'aria-invalid': true })
  }),
  toggleButton: ({ element, checked, disabled }: Props): SetAria =>
    element === 'button'
      ? {
          'aria-pressed': checked
        }
      : {
          role: 'button',
          'aria-pressed': checked,
          ...(disabled ? { 'aria-disabled': true } : { tabIndex: 0 })
        }
};

export const setAria = (
  type: keyof typeof typeMap,
  props: Props = {}
): SetAria => typeMap[type](props);
