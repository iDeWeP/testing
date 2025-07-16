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
  UnstyledButtonBarProps,
  UnstyledButtonTrailProps,
  UnstyledButtonInnerBorderProps,
  UnstyledButtonOuterBorderProps,
  UnstyledButtonSpinnerProps,
  UnstyledButtonOptionalProps,
  UnstyledButtonConfigProps,
  UnstyledButtonProps
} from '../UnstyledButton/UnstyledButton.types';

export type ButtonRippleProps = UnstyledButtonRippleProps;
export type ButtonBarProps = UnstyledButtonBarProps;
export type ButtonTrailProps = UnstyledButtonTrailProps;
export type ButtonInnerBorderProps = UnstyledButtonInnerBorderProps;
export type ButtonOuterBorderProps = UnstyledButtonOuterBorderProps;
export type ButtonSpinnerProps = UnstyledButtonSpinnerProps;

export type ButtonComponentsProps = {
  ripple?: ButtonRippleProps;
  spinner?: ButtonSpinnerProps;
  bar?: ButtonBarProps;
  trail?: ButtonTrailProps;
  innerBorder?: ButtonInnerBorderProps;
  outerBorder?: ButtonOuterBorderProps;
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
