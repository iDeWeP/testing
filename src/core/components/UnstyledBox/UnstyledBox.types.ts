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

export type UnstyledBoxDefaultProps = {
  as?: ElementType;
  disabled?: boolean;
  variant?: Variant;
  size?: BoxSize;
  scale?: Scale;
  margin?: Margin;
  border?: Border;
  radius?: Radius;
  color?: Color;
};

export type UnstyledBoxConfigProps = UnstyledBoxDefaultProps;

export type UnstyledBoxProps<E extends ElementType> = MergeProps<
  ComponentRefProps<E>,
  UnstyledBoxDefaultProps
>;
