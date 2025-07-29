import type { ReactNode, ElementType } from 'react';
import type {
  Loading,
  Variant,
  DefaultPosition,
  CornerPlacement,
  Size,
  DefaultScale,
  Color,
  Effect,
  MergeProps
} from '../../types';
import type {
  UnstyledButtonRippleProps,
  UnstyledButtonLoaderProps,
  UnstyledButtonBarProps,
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

type OptionalProps = {
  loading?: Loading;
  disabled?: boolean;
  startDecorator?: ReactNode;
  endDecorator?: ReactNode;
};

type DefaultProps = {
  variant?: Variant;
  position?: DefaultPosition;
  placement?: CornerPlacement;
  size?: Size;
  scale?: DefaultScale;
  color?: Color;
  effect?: Effect;
  componentsProps?: FabComponentsProps;
};

export type FabConfigProps = MergeProps<
  UnstyledButtonConfigProps,
  DefaultProps
>;

export type FabProps<E extends ElementType> = MergeProps<
  UnstyledButtonProps<E>,
  DefaultProps & OptionalProps
>;
