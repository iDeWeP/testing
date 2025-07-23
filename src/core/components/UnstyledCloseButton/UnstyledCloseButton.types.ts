import type { ElementType } from 'react';
import type {
  ComponentRefProps,
  SVGNodeProps,
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

export type UnstyledCloseButtonIconProps = ComponentRefProps<'svg'>;
export type UnstyledCloseButtonRippleProps = UnstyledButtonRippleProps;
export type UnstyledCloseButtonLoaderProps = UnstyledButtonLoaderProps;
export type UnstyledCloseButtonBarProps = UnstyledButtonBarProps;

export type UnstyledCloseButtonComponentsProps = {
  icon?: UnstyledCloseButtonIconProps;
  ripple?: UnstyledCloseButtonRippleProps;
  loader?: UnstyledCloseButtonLoaderProps;
  bar?: UnstyledCloseButtonBarProps;
  innerBorder?: UnstyledCloseButtonBarProps;
  outerBorder?: UnstyledCloseButtonBarProps;
};

export type UnstyledCloseButtonOptionalProps = {
  loading?: boolean;
  disabled?: boolean;
  children?: SVGNodeProps;
};

export type UnstyledCloseButtonDefaultProps = {
  variant?: Variant;
  size?: Size;
  radius?: Radius;
  color?: Color;
  effect?: Effect;
  componentsProps?: UnstyledCloseButtonComponentsProps;
  ripple?: Ripple;
};

export type UnstyledCloseButtonConfigProps = MergeProps<
  Omit<UnstyledButtonConfigProps, 'gap'>,
  UnstyledCloseButtonDefaultProps
>;

export type UnstyledCloseButtonProps<E extends ElementType> = MergeProps<
  Omit<UnstyledButtonProps<E>, 'startDecorator' | 'endDecorator' | 'gap'>,
  UnstyledCloseButtonDefaultProps & UnstyledCloseButtonOptionalProps
>;
