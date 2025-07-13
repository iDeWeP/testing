import type { ElementType, ComponentPropsWithRef } from 'react';
import type {
  Variant,
  Padding,
  Margin,
  Border,
  DefaultBorder,
  Radius,
  Font,
  Color,
  Shadow,
  Gap,
  MergeProps
} from '../../types';

export type BoxDefaultProps = {
  as?: ElementType;
  variant?: Variant;
  padding?: Padding;
  px?: Padding;
  py?: Padding;
  pt?: Padding;
  pb?: Padding;
  pl?: Padding;
  pr?: Padding;
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
  font?: Font;
  color?: Color;
  shadow?: Shadow;
  gap?: Gap;
  gx?: Gap;
  gy?: Gap;
};

export type BoxConfigProps = BoxDefaultProps;

export type BoxProps<E extends ElementType> = MergeProps<
  ComponentPropsWithRef<E>,
  BoxDefaultProps
>;
