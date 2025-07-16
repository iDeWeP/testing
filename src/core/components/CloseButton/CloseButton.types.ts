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
  UnstyledButtonSpinnerProps,
  UnstyledButtonBarProps,
  UnstyledButtonTrailProps,
  UnstyledButtonInnerBorderProps,
  UnstyledButtonOuterBorderProps,
  UnstyledButtonConfigProps,
  UnstyledButtonProps
} from '../UnstyledButton/UnstyledButton.types';

export type CloseButtonIconProps = ComponentRefProps<'svg'>;
export type CloseButtonRippleProps = UnstyledButtonRippleProps;
export type CloseButtonSpinnerProps = UnstyledButtonSpinnerProps;
export type CloseButtonBarProps = UnstyledButtonBarProps;
export type CloseButtonTrailProps = UnstyledButtonTrailProps;
export type CloseButtonInnerBorderProps = UnstyledButtonInnerBorderProps;
export type CloseButtonOuterBorderProps = UnstyledButtonOuterBorderProps;

export type CloseButtonComponentsProps = {
  icon?: CloseButtonIconProps;
  ripple?: CloseButtonRippleProps;
  spinner?: CloseButtonSpinnerProps;
  bar?: CloseButtonBarProps;
  trail?: CloseButtonTrailProps;
  innerBorder?: CloseButtonInnerBorderProps;
  outerBorder?: CloseButtonOuterBorderProps;
};

export type CloseButtonOptionalProps = {
  loading?: boolean;
  disabled?: boolean;
  children?: SVGNodeProps;
};

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
  UnstyledButtonConfigProps,
  CloseButtonDefaultProps
>;

export type CloseButtonProps<E extends ElementType> = MergeProps<
  Omit<UnstyledButtonProps<E>, 'checked' | 'leftDecorator' | 'rightDecorator'>,
  CloseButtonDefaultProps & CloseButtonOptionalProps
>;
