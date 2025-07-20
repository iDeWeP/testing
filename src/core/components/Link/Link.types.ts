import type { ElementType } from 'react';
import type {
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

export type LinkOptionalProps = Omit<UnstyledButtonOptionalProps, 'checked'>;

export type LinkDefaultProps = {
  variant?: Variant;
  size?: Size;
  scale?: DefaultScale;
  radius?: Radius;
  color?: Color;
  effect?: Effect;
  componentsProps?: LinkComponentsProps;
  ripple?: Ripple;
};

export type LinkConfigProps = MergeProps<
  UnstyledButtonConfigProps,
  LinkDefaultProps
>;

export type LinkProps<E extends ElementType> = MergeProps<
  Omit<UnstyledButtonProps<E>, 'checked'>,
  LinkDefaultProps & LinkOptionalProps
>;
