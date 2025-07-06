import type { ElementType } from 'react';
import type {
  Variant,
  Margin,
  Border,
  DefaultBorder,
  Radius,
  Font,
  Color,
  Shadow,
  Gap,
  MergeProps,
  ComponentRefProps
} from '../../types';

export type UnstyledContainerDefaultProps = {
  as?: ElementType;
  variant?: Variant;
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

export type UnstyledContainerConfigProps = UnstyledContainerDefaultProps;

export type UnstyledContainerProps<E extends ElementType> = MergeProps<
  ComponentRefProps<E>,
  UnstyledContainerDefaultProps
>;
