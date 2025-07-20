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
  UnstyledButtonLoaderProps,
  UnstyledButtonBarProps,
  UnstyledButtonOptionalProps,
  UnstyledButtonConfigProps,
  UnstyledButtonProps
} from '../UnstyledButton/UnstyledButton.types';

export type FabRippleProps = UnstyledButtonRippleProps;
export type FabLoaderProps = UnstyledButtonLoaderProps;
export type FabBarProps = UnstyledButtonBarProps;

export type FabComponentsProps = {
  ripple?: FabRippleProps;
  loader?: FabLoaderProps;
  bar?: FabBarProps;
  innerBorder?: FabBarProps;
  outerBorder?: FabBarProps;
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
