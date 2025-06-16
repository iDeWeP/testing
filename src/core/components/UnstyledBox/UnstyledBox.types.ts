import type { ElementType } from 'react';
import type {
  Variant,
  BoxSize,
  Scale,
  Margin,
  Border,
  Radius,
  Color,
  MergeProps,
  ComponentRefProps
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

export type UnstyledBoxDefaultProps = UnstyledBoxConfigProps;

export type UnstyledBoxProps<E extends ElementType> = MergeProps<
  ComponentRefProps<E>,
  UnstyledBoxDefaultProps
>;
