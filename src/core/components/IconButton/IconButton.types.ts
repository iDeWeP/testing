import type { ElementType } from 'react';
import type {
  Loading,
  Variant,
  Size,
  Color,
  Effect,
  MergeProps,
  OmitDecorators
} from '../../types';
import type {
  UnstyledButtonRippleProps,
  UnstyledButtonLoaderProps,
  UnstyledButtonBarProps,
  UnstyledButtonConfigProps,
  UnstyledButtonProps
} from '../UnstyledButton/UnstyledButton.types';

export type IconButtonRippleProps = UnstyledButtonRippleProps;
export type IconButtonLoaderProps = UnstyledButtonLoaderProps;
export type IconButtonBarProps = UnstyledButtonBarProps;

export type IconButtonComponentsProps = {
  ripple?: IconButtonRippleProps;
  loader?: IconButtonLoaderProps;
  bar?: IconButtonBarProps;
  innerBorder?: IconButtonBarProps;
  outerBorder?: IconButtonBarProps;
};

type OptionalProps = {
  loading?: Loading;
  disabled?: boolean;
};

type DefaultProps = {
  variant?: Variant;
  size?: Size;
  color?: Color;
  effect?: Effect;
  componentsProps?: IconButtonComponentsProps;
};

export type IconButtonConfigProps = MergeProps<
  UnstyledButtonConfigProps,
  DefaultProps
>;

export type IconButtonProps<E extends ElementType> = MergeProps<
  OmitDecorators<UnstyledButtonProps<E>>,
  DefaultProps & OptionalProps
>;
