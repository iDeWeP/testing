import type { ElementType } from 'react';
import type {
  Variant,
  Size,
  DefaultScale,
  Radius,
  Color,
  Effect,
  Ripple,
  MergeProps
} from '../../types';
import type {
  UnstyledButtonRippleProps,
  UnstyledButtonLoaderProps,
  UnstyledButtonBarProps,
  UnstyledButtonOptionalProps,
  UnstyledButtonConfigProps,
  UnstyledButtonProps
} from '../UnstyledButton/UnstyledButton.types';

export type ButtonRippleProps = UnstyledButtonRippleProps;
export type ButtonLoaderProps = UnstyledButtonLoaderProps;
export type ButtonBarProps = UnstyledButtonBarProps;

export type ButtonComponentsProps = {
  ripple?: ButtonRippleProps;
  loader?: ButtonLoaderProps;
  bar?: ButtonBarProps;
  innerBorder?: ButtonBarProps;
  outerBorder?: ButtonBarProps;
};

export type ButtonOptionalProps = Omit<UnstyledButtonOptionalProps, 'checked'>;

export type ButtonDefaultProps = {
  variant?: Variant;
  size?: Size;
  scale?: DefaultScale;
  radius?: Radius;
  color?: Color;
  effect?: Effect;
  componentsProps?: ButtonComponentsProps;
  ripple?: Ripple;
};

export type ButtonConfigProps = MergeProps<
  UnstyledButtonConfigProps,
  ButtonDefaultProps
>;

export type ButtonProps<E extends ElementType> = MergeProps<
  Omit<UnstyledButtonProps<E>, 'checked'>,
  ButtonDefaultProps & ButtonOptionalProps
>;
