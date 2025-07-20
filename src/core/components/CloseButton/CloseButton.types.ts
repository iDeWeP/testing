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
  UnstyledCloseButtonIconProps,
  UnstyledCloseButtonRippleProps,
  UnstyledCloseButtonLoaderProps,
  UnstyledCloseButtonBarProps,
  UnstyledCloseButtonOptionalProps,
  UnstyledCloseButtonConfigProps,
  UnstyledCloseButtonProps
} from '../UnstyledCloseButton/UnstyledCloseButton.types';

export type CloseButtonIconProps = UnstyledCloseButtonIconProps;
export type CloseButtonRippleProps = UnstyledCloseButtonRippleProps;
export type CloseButtonLoaderProps = UnstyledCloseButtonLoaderProps;
export type CloseButtonBarProps = UnstyledCloseButtonBarProps;

export type CloseButtonComponentsProps = {
  icon?: CloseButtonIconProps;
  ripple?: CloseButtonRippleProps;
  loader?: CloseButtonLoaderProps;
  bar?: CloseButtonBarProps;
  innerBorder?: CloseButtonBarProps;
  outerBorder?: CloseButtonBarProps;
};

export type CloseButtonOptionalProps = UnstyledCloseButtonOptionalProps;

export type CloseButtonDefaultProps = {
  variant?: Variant;
  size?: Size;
  radius?: Radius;
  color?: Color;
  effect?: Effect;
  componentsProps?: CloseButtonComponentsProps;
  ripple?: Ripple;
};

export type CloseButtonConfigProps = MergeProps<
  UnstyledCloseButtonConfigProps,
  CloseButtonDefaultProps
>;

export type CloseButtonProps<E extends ElementType> = MergeProps<
  UnstyledCloseButtonProps<E>,
  CloseButtonDefaultProps & CloseButtonOptionalProps
>;
