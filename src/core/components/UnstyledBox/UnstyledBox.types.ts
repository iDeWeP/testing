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
  Ring,
  Gap,
  MergeProps
} from '../../types';

type DefaultProps = {
  as?: ElementType;
  variant?: Variant;
  padding?: Padding;
  p?: Padding;
  px?: Padding;
  py?: Padding;
  pt?: Padding;
  pb?: Padding;
  pl?: Padding;
  pr?: Padding;
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
  font?: Font;
  color?: Color;
  shadow?: Shadow;
  ring?: Ring;
  gap?: Gap;
  gx?: Gap;
  gy?: Gap;
};

export type UnstyledBoxConfigProps = DefaultProps;

export type UnstyledBoxProps<E extends ElementType> = MergeProps<
  ComponentPropsWithRef<E>,
  DefaultProps
>;
