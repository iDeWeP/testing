import type { ElementType, ComponentPropsWithRef } from 'react';
import type {
  Variant,
  Size,
  Scale,
  Margin,
  Border,
  Radius,
  Color,
  Shadow,
  Ring,
  Gap,
  MergeProps
} from '../../types';

type DefaultProps = {
  as?: ElementType;
  variant?: Variant;
  size?: Size;
  scale?: Scale;
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
  ring?: Ring;
  gap?: Gap;
};

export type UnstyledContainerConfigProps = DefaultProps;

export type UnstyledContainerProps<E extends ElementType> = MergeProps<
  ComponentPropsWithRef<E>,
  DefaultProps
>;
