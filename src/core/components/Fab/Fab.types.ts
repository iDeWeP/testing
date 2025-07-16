import type { ElementType } from 'react';
import type {
  DefaultPosition,
  CornerPlacement,
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

export type FabRippleProps = UnstyledButtonRippleProps;
export type FabBarProps = UnstyledButtonBarProps;
export type FabTrailProps = UnstyledButtonTrailProps;
export type FabInnerBorderProps = UnstyledButtonInnerBorderProps;
export type FabOuterBorderProps = UnstyledButtonOuterBorderProps;
export type FabSpinnerProps = UnstyledButtonSpinnerProps;

export type FabComponentsProps = {
  ripple?: FabRippleProps;
  spinner?: FabSpinnerProps;
  bar?: FabBarProps;
  trail?: FabTrailProps;
  innerBorder?: FabInnerBorderProps;
  outerBorder?: FabOuterBorderProps;
};

export type FabOptionalProps = Omit<UnstyledButtonOptionalProps, 'checked'>;

export type FabDefaultProps = {
  position?: DefaultPosition;
  placement?: CornerPlacement;
  variant?: Variant;
  size?: Size;
  scale?: DefaultScale;
  radius?: Radius;
  color?: Color;
  effect?: Effect;
  componentsProps?: FabComponentsProps;
  ripple?: Ripple;
};

export type FabConfigProps = MergeProps<
  UnstyledButtonConfigProps,
  FabDefaultProps
>;

export type FabProps<E extends ElementType> = MergeProps<
  Omit<UnstyledButtonProps<E>, 'checked'>,
  FabDefaultProps & FabOptionalProps
>;
