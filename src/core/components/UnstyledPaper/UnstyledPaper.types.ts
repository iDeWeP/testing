import type { ElementType, ComponentPropsWithRef } from 'react';
import type {
  Variant,
  Orientation,
  PaperSize,
  Padding,
  Border,
  DefaultBorder,
  Radius,
  Font,
  Color,
  Shadow,
  Gap,
  MergeProps
} from '../../types';

export type UnstyledPaperDefaultProps = {
  as?: ElementType;
  variant?: Variant;
  orientation?: Orientation;
  size?: PaperSize;
  padding?: Padding;
  px?: Padding;
  py?: Padding;
  pt?: Padding;
  pb?: Padding;
  pl?: Padding;
  pr?: Padding;
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

export type UnstyledPaperConfigProps = UnstyledPaperDefaultProps;

export type UnstyledPaperProps<E extends ElementType> = MergeProps<
  ComponentPropsWithRef<E>,
  UnstyledPaperDefaultProps
>;
