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
  UnstyledButtonLoaderProps,
  UnstyledButtonBarProps,
  UnstyledButtonOptionalProps,
  UnstyledButtonConfigProps,
  UnstyledButtonProps
} from '../UnstyledButton/UnstyledButton.types';

export type ChipRippleProps = UnstyledButtonRippleProps;
export type ChipLoaderProps = UnstyledButtonLoaderProps;
export type ChipBarProps = UnstyledButtonBarProps;

export type ChipComponentsProps = {
  ripple?: ChipRippleProps;
  loader?: ChipLoaderProps;
  bar?: ChipBarProps;
  innerBorder?: ChipBarProps;
  outerBorder?: ChipBarProps;
};

export type ChipOptionalProps = UnstyledButtonOptionalProps;

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
  UnstyledButtonProps<E>,
  ChipDefaultProps & ChipOptionalProps
>;
