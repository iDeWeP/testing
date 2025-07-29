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

export type ButtonRippleProps = UnstyledButtonRippleProps;
export type ButtonLoaderProps = UnstyledButtonLoaderProps;
export type ButtonBarProps = UnstyledButtonBarProps;

export type ButtonComponentsProps = {
  ripple?: ButtonRippleProps;
  loader?: ButtonLoaderProps;
  bar?: ButtonBarProps;
  innerBorder?: ButtonBarProps;
  outerBorder?: ButtonBarProps;
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
  componentsProps?: ButtonComponentsProps;
};

export type ButtonConfigProps = MergeProps<
  UnstyledButtonConfigProps,
  DefaultProps
>;

export type ButtonProps<E extends ElementType> = MergeProps<
  UnstyledButtonProps<E>,
  DefaultProps & OptionalProps
>;
