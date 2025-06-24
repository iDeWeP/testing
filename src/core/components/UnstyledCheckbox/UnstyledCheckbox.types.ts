import type { ComponentPropsWithRef, ReactElement, RefObject } from 'react';
import type {
  ComponentRefProps,
  Size,
  Margin,
  Radius,
  Color,
  Ripple,
  MergeProps,
  Variant
} from '../../types';

export type UnstyledCheckboxComponentProps = {
  container?: ComponentRefProps<'div'>;
  icon?: ComponentRefProps<'svg'>;
  trail?: ComponentRefProps<'span'>;
  ripple?: ComponentRefProps<'span'>;
};

type UntyledInputOptionalProps = {
  inputRef?: RefObject<HTMLInputElement | null>;
  children?: ReactElement<ComponentPropsWithRef<'svg'>>;
};

export type UnstyledCheckboxDefaultProps = {
  type?: 'checkbox' | 'radio';
  checked?: boolean;
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  variant?: Variant;
  size?: Size;
  margin?: Margin;
  border?: boolean;
  radius?: Radius;
  color?: Color;
  componentsProps?: UnstyledCheckboxComponentProps;
  ripple?: Ripple;
};

export type UnstyledCheckboxConfigProps = UnstyledCheckboxDefaultProps;

export type UnstyledCheckboxProps = MergeProps<
  ComponentRefProps<'input'>,
  UnstyledCheckboxDefaultProps & UntyledInputOptionalProps
>;
