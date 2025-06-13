import type { ElementType, ComponentPropsWithRef } from 'react';
import type {
  Variant,
  BoxSize,
  Scale,
  Margin,
  Border,
  Radius,
  Color
} from '../../types';

export type UnstyledBoxConfigProps = {
  as?: ElementType;
  variant?: Variant;
  size?: BoxSize;
  scale?: Scale;
  margin?: Margin;
  border?: Border;
  radius?: Radius;
  color?: Color;
};

export type UnstyledBoxProps<E extends ElementType> = ComponentPropsWithRef<E> &
  UnstyledBoxConfigProps;
