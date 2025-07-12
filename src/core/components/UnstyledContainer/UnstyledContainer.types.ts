import type { ElementType, ComponentPropsWithRef } from 'react';
import type {
  Variant,
  Size,
  Scale,
  Margin,
  Border,
  DefaultBorder,
  Radius,
  Color,
  Shadow,
  Gap,
  MergeProps
} from '../../types';

export type UnstyledContainerDefaultProps = {
  as?: ElementType;
  variant?: Variant;
  size?: Size;
  scale?: Scale;
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
  color?: Color;
  shadow?: Shadow;
  gap?: Gap;
};

export type UnstyledContainerConfigProps = UnstyledContainerDefaultProps;

export type UnstyledContainerProps<E extends ElementType> = MergeProps<
  ComponentPropsWithRef<E>,
  UnstyledContainerDefaultProps
>;
