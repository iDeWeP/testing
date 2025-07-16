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
  UnstyledButtonSpinnerProps,
  UnstyledButtonBarProps,
  UnstyledButtonTrailProps,
  UnstyledButtonInnerBorderProps,
  UnstyledButtonOuterBorderProps,
  UnstyledButtonOptionalProps,
  UnstyledButtonConfigProps,
  UnstyledButtonProps
} from '../UnstyledButton/UnstyledButton.types';

export type ToggleButtonRippleProps = UnstyledButtonRippleProps;
export type ToggleButtonSpinnerProps = UnstyledButtonSpinnerProps;
export type ToggleButtonBarProps = UnstyledButtonBarProps;
export type ToggleButtonTrailProps = UnstyledButtonTrailProps;
export type ToggleButtonInnerBorderProps = UnstyledButtonInnerBorderProps;
export type ToggleButtonOuterBorderProps = UnstyledButtonOuterBorderProps;

export type ToggleButtonComponentsProps = {
  ripple?: ToggleButtonRippleProps;
  spinner?: ToggleButtonSpinnerProps;
  bar?: ToggleButtonBarProps;
  trail?: ToggleButtonTrailProps;
  innerBorder?: ToggleButtonInnerBorderProps;
  outerBorder?: ToggleButtonOuterBorderProps;
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
