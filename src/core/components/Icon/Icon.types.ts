import type { ComponentPropsWithRef } from 'react';
import type {
  SVGNodeProps,
  Variant,
  Font,
  Margin,
  Border,
  DefaultBorder,
  Radius,
  Color,
  Shadow,
  MergeProps
} from '../../types';

export type IconOptionalProps = {
  children?: SVGNodeProps;
};

export type IconDefaultProps = {
  variant?: Variant;
  size?: Font;
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
  shadow?: Shadow;
};

export type IconConfigProps = IconDefaultProps;

export type IconProps = MergeProps<
  ComponentPropsWithRef<'svg'>,
  IconDefaultProps & IconOptionalProps
>;
