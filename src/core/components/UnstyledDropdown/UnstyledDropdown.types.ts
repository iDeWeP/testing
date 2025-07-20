import type { ElementType, ComponentPropsWithRef } from 'react';
import type {
  Variant,
  Orientation,
  Padding,
  Border,
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
  ring?: Color;
  gap?: Gap;
  gx?: Gap;
  gy?: Gap;
};

export type UnstyledDropdownConfigProps = UnstyledDropdownDefaultProps;

export type UnstyledDropdownProps<E extends ElementType> = MergeProps<
  ComponentPropsWithRef<E>,
  UnstyledDropdownDefaultProps
>;
