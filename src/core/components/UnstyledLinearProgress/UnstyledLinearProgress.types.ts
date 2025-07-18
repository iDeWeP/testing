import type { ComponentPropsWithRef } from 'react';
import type {
  ComponentRefProps,
  Variant,
  Orientation,
  Size,
  Margin,
  Border,
  DefaultBorder,
  Radius,
  Color,
  MergeProps
} from '../../types';

export type UnstyledLinearProgressLabelProps = ComponentRefProps<'span'>;
export type UnstyledLinearProgressBarProps = ComponentRefProps<'div'>;

export type UnstyledLinearProgressComponentsProps = {
  label?: UnstyledLinearProgressLabelProps;
  bar?: UnstyledLinearProgressBarProps;
};

export type UnstyledLinearProgressOptionalProps = {
  disabled?: boolean;
};

export type UnstyledLinearProgressDefaultProps = {
  value?: number;
  variant?: Variant;
  orientation?: Orientation;
  size?: Size;
  margin?: Margin;
  m?: Margin;
  mx?: Margin;
  my?: Margin;
  mt?: Margin;
  mb?: Margin;
  ml?: Margin;
  mr?: Margin;
  border?: Border;
  b?: DefaultBorder;
  bx?: DefaultBorder;
  by?: DefaultBorder;
  bt?: DefaultBorder;
  bb?: DefaultBorder;
  bl?: DefaultBorder;
  br?: DefaultBorder;
  radius?: Radius;
  r?: Radius;
  rt?: Radius;
  rb?: Radius;
  rl?: Radius;
  rr?: Radius;
  rtl?: Radius;
  rtr?: Radius;
  rbl?: Radius;
  rbr?: Radius;
  color?: Color;
  componentsProps?: UnstyledLinearProgressComponentsProps;
};

export type UnstyledLinearProgressConfigProps =
  UnstyledLinearProgressDefaultProps;

export type UnstyledLinearProgressProps = MergeProps<
  ComponentPropsWithRef<'div'>,
  UnstyledLinearProgressDefaultProps & UnstyledLinearProgressOptionalProps
>;
