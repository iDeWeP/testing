import type { RefObject } from 'react';
import type {
  ComponentRefProps,
  SVGNodeProps,
  Variant,
  Size,
  Margin,
  Radius,
  Color,
  Ripple,
  MergeProps
} from '../../types';

export type UnstyledCheckboxComponentProps = {
  container?: ComponentRefProps<'div'>;
  icon?: ComponentRefProps<'svg'>;
  trail?: ComponentRefProps<'span'>;
  ripple?: ComponentRefProps<'span'>;
};

type OptionalProps = {
  inputRef?: RefObject<HTMLInputElement | null>;
  children?: SVGNodeProps;
};

export type UnstyledCheckboxDefaultProps = {
  checked?: boolean;
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  type?: 'checkbox' | 'radio';
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
  UnstyledCheckboxDefaultProps & OptionalProps
>;
