import type { ElementType } from 'react';
import type {
  Variant,
  DefaultSize,
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

export type ChipRippleProps = UnstyledButtonRippleProps;
export type ChipSpinnerProps = UnstyledButtonSpinnerProps;
export type ChipBarProps = UnstyledButtonBarProps;
export type ChipTrailProps = UnstyledButtonTrailProps;
export type ChipInnerBorderProps = UnstyledButtonInnerBorderProps;
export type ChipOuterBorderProps = UnstyledButtonOuterBorderProps;

export type ChipComponentsProps = {
  ripple?: ChipRippleProps;
  spinner?: ChipSpinnerProps;
  bar?: ChipBarProps;
  trail?: ChipTrailProps;
  innerBorder?: ChipInnerBorderProps;
  outerBorder?: ChipOuterBorderProps;
};

export type ChipOptionalProps = Omit<UnstyledButtonOptionalProps, 'checked'>;

export type ChipDefaultProps = {
  variant?: Variant;
  size?: DefaultSize;
  radius?: Radius;
  color?: Color;
  effect?: Effect;
  componentsProps?: ChipComponentsProps;
  ripple?: Ripple;
};

export type ChipConfigProps = MergeProps<
  UnstyledButtonConfigProps,
  ChipDefaultProps
>;

export type ChipProps<E extends ElementType> = MergeProps<
  Omit<UnstyledButtonProps<E>, 'checked'>,
  ChipDefaultProps & ChipOptionalProps
>;
