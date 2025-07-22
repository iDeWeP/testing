import type { ElementType } from 'react';
import type {
  Variant,
  Size,
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
  UnstyledButtonConfigProps,
  UnstyledButtonProps
} from '../UnstyledButton/UnstyledButton.types';

export type IconButtonRippleProps = UnstyledButtonRippleProps;
export type IconButtonLoaderProps = UnstyledButtonLoaderProps;
export type IconButtonBarProps = UnstyledButtonBarProps;

export type IconButtonComponentsProps = {
  ripple?: IconButtonRippleProps;
  loader?: IconButtonLoaderProps;
  bar?: IconButtonBarProps;
  innerBorder?: IconButtonBarProps;
  outerBorder?: IconButtonBarProps;
};

export type IconButtonOptionalProps = {
  loading?: boolean;
  disabled?: boolean;
};

export type IconButtonDefaultProps = {
  variant?: Variant;
  size?: Size;
  radius?: Radius;
  color?: Color;
  effect?: Effect;
  componentsProps?: IconButtonComponentsProps;
  ripple?: Ripple;
};

export type IconButtonConfigProps = MergeProps<
  UnstyledButtonConfigProps,
  IconButtonDefaultProps
>;

export type IconButtonProps<E extends ElementType> = MergeProps<
  Omit<UnstyledButtonProps<E>, 'checked' | 'startDecorator' | 'endDecorator'>,
  IconButtonDefaultProps & IconButtonOptionalProps
>;
