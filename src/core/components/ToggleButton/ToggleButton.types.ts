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

export type ToggleButtonRippleProps = UnstyledButtonRippleProps;
export type ToggleButtonLoaderProps = UnstyledButtonLoaderProps;
export type ToggleButtonBarProps = UnstyledButtonBarProps;

export type ToggleButtonComponentsProps = {
  ripple?: ToggleButtonRippleProps;
  loader?: ToggleButtonLoaderProps;
  bar?: ToggleButtonBarProps;
  innerBorder?: ToggleButtonBarProps;
  outerBorder?: ToggleButtonBarProps;
};

export type ToggleButtonOptionalProps = UnstyledButtonOptionalProps;

export type ToggleButtonDefaultProps = {
  variant?: Variant;
  size?: Size;
  scale?: DefaultScale;
  radius?: Radius;
  color?: Color;
  effect?: Effect;
  componentsProps?: ToggleButtonComponentsProps;
  ripple?: Ripple;
};

export type ToggleButtonConfigProps = MergeProps<
  UnstyledButtonConfigProps,
  ToggleButtonDefaultProps
>;

export type ToggleButtonProps<E extends ElementType> = MergeProps<
  UnstyledButtonProps<E>,
  ToggleButtonDefaultProps & ToggleButtonOptionalProps
>;
