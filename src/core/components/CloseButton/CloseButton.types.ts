import type { ElementType } from 'react';
import type {
  SVGNodeProps,
  Variant,
  Size,
  Color,
  MergeProps
} from '../../types';
import type {
  UnstyledCloseButtonIconProps,
  UnstyledCloseButtonRippleProps,
  UnstyledCloseButtonLoaderProps,
  UnstyledCloseButtonBarProps,
  UnstyledCloseButtonConfigProps,
  UnstyledCloseButtonProps
} from '../UnstyledCloseButton/UnstyledCloseButton.types';

export type CloseButtonIconProps = UnstyledCloseButtonIconProps;
export type CloseButtonRippleProps = UnstyledCloseButtonRippleProps;
export type CloseButtonLoaderProps = UnstyledCloseButtonLoaderProps;
export type CloseButtonBarProps = UnstyledCloseButtonBarProps;

export type CloseButtonComponentsProps = {
  icon?: CloseButtonIconProps;
  ripple?: CloseButtonRippleProps;
  loader?: CloseButtonLoaderProps;
  bar?: CloseButtonBarProps;
  innerBorder?: CloseButtonBarProps;
  outerBorder?: CloseButtonBarProps;
};

type OptionalProps = {
  loading?: boolean;
  disabled?: boolean;
  children?: SVGNodeProps;
};

type DefaultProps = {
  variant?: Variant;
  size?: Size;
  color?: Color;
  componentsProps?: CloseButtonComponentsProps;
};

export type CloseButtonConfigProps = MergeProps<
  UnstyledCloseButtonConfigProps,
  DefaultProps
>;

export type CloseButtonProps<E extends ElementType> = MergeProps<
  UnstyledCloseButtonProps<E>,
  DefaultProps & OptionalProps
>;
