import type { ComponentPropsWithRef } from 'react';
import type {
  SVGNodeProps,
  Variant,
  Font,
  Margin,
  Border,
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
  ring?: Color;
};

export type IconConfigProps = IconDefaultProps;

export type IconProps = MergeProps<
  ComponentPropsWithRef<'svg'>,
  IconDefaultProps & IconOptionalProps
>;
