import type { ReactNode, ElementType } from 'react';
import type {
  Loading,
  Variant,
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

export type LinkRippleProps = UnstyledButtonRippleProps;
export type LinkLoaderProps = UnstyledButtonLoaderProps;
export type LinkBarProps = UnstyledButtonBarProps;

export type LinkComponentsProps = {
  ripple?: LinkRippleProps;
  loader?: LinkLoaderProps;
  bar?: LinkBarProps;
  innerBorder?: LinkBarProps;
  outerBorder?: LinkBarProps;
};

type OptionalProps = {
  loading?: Loading;
  disabled?: boolean;
  startDecorator?: ReactNode;
  endDecorator?: ReactNode;
};

type DefaultProps = {
  variant?: Variant;
  size?: Size;
  scale?: DefaultScale;
  color?: Color;
  effect?: Effect;
  componentsProps?: LinkComponentsProps;
};

export type LinkConfigProps = MergeProps<
  UnstyledButtonConfigProps,
  DefaultProps
>;

export type LinkProps<E extends ElementType> = MergeProps<
  UnstyledButtonProps<E>,
  DefaultProps & OptionalProps
>;
