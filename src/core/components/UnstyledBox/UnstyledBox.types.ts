import type { ElementType } from 'react';
import type {
  Variant,
  Padding,
  Margin,
  Border,
  Radius,
  Font,
  Color,
  Shadow,
  Gap,
  MergeProps,
  ComponentRefProps
} from '../../types';

export type UnstyledBoxDefaultProps = {
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

export type UnstyledBoxConfigProps = UnstyledBoxDefaultProps;

export type UnstyledBoxProps<E extends ElementType> = MergeProps<
  ComponentRefProps<E>,
  UnstyledBoxDefaultProps
>;
