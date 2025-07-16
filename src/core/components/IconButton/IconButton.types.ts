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
  UnstyledButtonSpinnerProps,
  UnstyledButtonBarProps,
  UnstyledButtonTrailProps,
  UnstyledButtonInnerBorderProps,
  UnstyledButtonOuterBorderProps,
  UnstyledButtonOptionalProps,
  UnstyledButtonConfigProps,
  UnstyledButtonProps
} from '../UnstyledButton/UnstyledButton.types';

export type IconButtonRippleProps = UnstyledButtonRippleProps;
export type IconButtonSpinnerProps = UnstyledButtonSpinnerProps;
export type IconButtonBarProps = UnstyledButtonBarProps;
export type IconButtonTrailProps = UnstyledButtonTrailProps;
export type IconButtonInnerBorderProps = UnstyledButtonInnerBorderProps;
export type IconButtonOuterBorderProps = UnstyledButtonOuterBorderProps;

export type IconButtonComponentsProps = {
  ripple?: IconButtonRippleProps;
  spinner?: IconButtonSpinnerProps;
  bar?: IconButtonBarProps;
  trail?: IconButtonTrailProps;
  innerBorder?: IconButtonInnerBorderProps;
  outerBorder?: IconButtonOuterBorderProps;
};

type OmitedProps = 'checked' | 'leftDecorator' | 'rightDecorator';

export type IconButtonOptionalProps = Omit<
  UnstyledButtonOptionalProps,
  OmitedProps
>;

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
  Omit<UnstyledButtonProps<E>, OmitedProps>,
  IconButtonDefaultProps & IconButtonOptionalProps
>;
