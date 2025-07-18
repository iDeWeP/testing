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
  UnstyledCloseButtonSpinnerProps,
  UnstyledCloseButtonBarProps,
  UnstyledCloseButtonTrailProps,
  UnstyledCloseButtonInnerBorderProps,
  UnstyledCloseButtonOuterBorderProps,
  UnstyledCloseButtonOptionalProps,
  UnstyledCloseButtonConfigProps,
  UnstyledCloseButtonProps
} from '../UnstyledCloseButton/UnstyledCloseButton.types';

export type CloseButtonIconProps = UnstyledCloseButtonIconProps;
export type CloseButtonRippleProps = UnstyledCloseButtonRippleProps;
export type CloseButtonSpinnerProps = UnstyledCloseButtonSpinnerProps;
export type CloseButtonBarProps = UnstyledCloseButtonBarProps;
export type CloseButtonTrailProps = UnstyledCloseButtonTrailProps;
export type CloseButtonInnerBorderProps = UnstyledCloseButtonInnerBorderProps;
export type CloseButtonOuterBorderProps = UnstyledCloseButtonOuterBorderProps;

export type CloseButtonComponentsProps = {
  icon?: CloseButtonIconProps;
  ripple?: CloseButtonRippleProps;
  spinner?: CloseButtonSpinnerProps;
  bar?: CloseButtonBarProps;
  trail?: CloseButtonTrailProps;
  innerBorder?: CloseButtonInnerBorderProps;
  outerBorder?: CloseButtonOuterBorderProps;
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
