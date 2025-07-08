import type { ComponentPropsWithRef, RefObject } from 'react';
import type {
  Radius,
  Border,
  DefaultBorder,
  RippleEffect,
  SVGNodeProps,
  Variant,
  DefaultSize,
  Margin,
  Color,
  Shadow,
  Ripple,
  MergeProps
} from '../../types';
import type { UnstyledRippleProps } from '../UnstyledRipple/UnstyledRipple.types';

export type UnstyledCheckboxContainerProps = {
  radius?: Radius;
  rt?: Radius;
  rb?: Radius;
  rl?: Radius;
  rr?: Radius;
  rtl?: Radius;
  rtr?: Radius;
  rbl?: Radius;
  rbr?: Radius;
} & ComponentPropsWithRef<'div'>;

export type UnstyledCheckboxIconProps = Omit<
  ComponentPropsWithRef<'svg'>,
  'by' | 'radius' | 'color'
>;

export type UnstyledCheckboxTrailProps = {
  border?: Border;
  bx?: DefaultBorder;
  by?: DefaultBorder;
  bt?: DefaultBorder;
  bb?: DefaultBorder;
  bl?: DefaultBorder;
  br?: DefaultBorder;
  color?: 'transparent';
} & ComponentPropsWithRef<'span'>;

export type UnstyledCheckboxRippleProps = {
  effect?: RippleEffect;
} & ComponentPropsWithRef<'span'>;

export type UnstyledCheckboxComponentsProps = {
  container?: UnstyledCheckboxContainerProps;
  icon?: UnstyledCheckboxIconProps;
  trail?: UnstyledCheckboxTrailProps;
  ripple?: UnstyledRippleProps;
};

type OptionalProps = {
  inputRef?: RefObject<HTMLInputElement | null>;
  checked?: boolean;
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  children?: SVGNodeProps;
};

export type UnstyledCheckboxDefaultProps = {
  type?: 'checkbox' | 'radio';
  variant?: Variant;
  size?: DefaultSize;
  margin?: Margin;
  mx?: Margin;
  my?: Margin;
  mt?: Margin;
  mb?: Margin;
  ml?: Margin;
  mr?: Margin;
  border?: Border;
  bx?: DefaultBorder;
  by?: DefaultBorder;
  bt?: DefaultBorder;
  bb?: DefaultBorder;
  bl?: DefaultBorder;
  br?: DefaultBorder;
  radius?: Radius;
  rt?: Radius;
  rb?: Radius;
  rl?: Radius;
  rr?: Radius;
  rtl?: Radius;
  rtr?: Radius;
  rbl?: Radius;
  rbr?: Radius;
  color?: Color;
  shadow?: Shadow;
  componentsProps?: UnstyledCheckboxComponentsProps;
  ripple?: Ripple;
};

export type UnstyledCheckboxConfigProps = UnstyledCheckboxDefaultProps;

export type UnstyledCheckboxProps = MergeProps<
  ComponentPropsWithRef<'input'>,
  UnstyledCheckboxDefaultProps & OptionalProps
>;
