import type { ComponentPropsWithRef } from 'react';
import type {
  SVGNodeProps,
  Variant,
  Spacing,
  Margin,
  Border,
  DefaultBorder,
  Radius,
  Color,
  Shadow,
  Ring,
  MergeProps
} from '../../types';

type OptionalProps = {
  children?: SVGNodeProps;
};

type DefaultProps = {
  variant?: Variant;
  size?: Spacing;
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
  ring?: Ring;
};

export type IconConfigProps = DefaultProps;

export type IconProps = MergeProps<
  ComponentPropsWithRef<'svg'>,
  DefaultProps & OptionalProps
>;
