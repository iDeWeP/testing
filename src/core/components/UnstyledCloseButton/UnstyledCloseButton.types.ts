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

export type UnstyledCloseButtonIconProps = ComponentRefProps<'svg'>;
export type UnstyledCloseButtonRippleProps = UnstyledButtonRippleProps;
export type UnstyledCloseButtonSpinnerProps = UnstyledButtonSpinnerProps;
export type UnstyledCloseButtonBarProps = UnstyledButtonBarProps;
export type UnstyledCloseButtonTrailProps = UnstyledButtonTrailProps;
export type UnstyledCloseButtonInnerBorderProps =
  UnstyledButtonInnerBorderProps;
export type UnstyledCloseButtonOuterBorderProps =
  UnstyledButtonOuterBorderProps;

export type UnstyledCloseButtonComponentsProps = {
  icon?: UnstyledCloseButtonIconProps;
  ripple?: UnstyledCloseButtonRippleProps;
  spinner?: UnstyledCloseButtonSpinnerProps;
  bar?: UnstyledCloseButtonBarProps;
  trail?: UnstyledCloseButtonTrailProps;
  innerBorder?: UnstyledCloseButtonInnerBorderProps;
  outerBorder?: UnstyledCloseButtonOuterBorderProps;
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
  UnstyledButtonConfigProps,
  UnstyledCloseButtonDefaultProps
>;

export type UnstyledCloseButtonProps<E extends ElementType> = MergeProps<
  Omit<UnstyledButtonProps<E>, 'checked' | 'leftDecorator' | 'rightDecorator'>,
  UnstyledCloseButtonDefaultProps & UnstyledCloseButtonOptionalProps
>;
