import type { ReactNode, ElementType } from 'react';
import type {
  Loading,
  Variant,
  DefaultSize,
  Color,
  MergeProps
} from '../../types';
import type {
  UnstyledButtonRippleProps,
  UnstyledButtonLoaderProps,
  UnstyledButtonBarProps,
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

type OptionalProps = {
  loading?: Loading;
  disabled?: boolean;
  startDecorator?: ReactNode;
  endDecorator?: ReactNode;
};

type DefaultProps = {
  variant?: Variant;
  size?: DefaultSize;
  color?: Color;
  componentsProps?: ChipComponentsProps;
};

export type ChipConfigProps = MergeProps<
  UnstyledButtonConfigProps,
  DefaultProps
>;

export type ChipProps<E extends ElementType> = MergeProps<
  UnstyledButtonProps<E>,
  DefaultProps & OptionalProps
>;
