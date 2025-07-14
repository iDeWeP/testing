import type { ElementType, ComponentPropsWithRef } from 'react';
import type {
  Variant,
  Orientation,
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

export type UnstyledDropdownDefaultProps = {
  as?: ElementType;
  variant?: Variant;
  orientation?: Orientation;
  padding?: Padding;
  p?: Padding;
  px?: Padding;
  py?: Padding;
  pt?: Padding;
  pb?: Padding;
  pl?: Padding;
  pr?: Padding;
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
  gap?: Gap;
  gx?: Gap;
  gy?: Gap;
};

export type UnstyledDropdownConfigProps = UnstyledDropdownDefaultProps;

export type UnstyledDropdownProps<E extends ElementType> = MergeProps<
  ComponentPropsWithRef<E>,
  UnstyledDropdownDefaultProps
>;
