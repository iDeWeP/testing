import type { ElementType } from 'react';
import type {
  Variant,
  Scale,
  Spacing,
  Margin,
  Border,
  Radius,
  Color,
  RefProps
} from '../../types';

export type BoxDefaultProps = {
  variant?: Variant;
  scale?: Scale;
  spacing?: Spacing;
  margin?: Margin;
  border?: Border;
  radius?: Radius;
  color?: Color;
};

export type BoxProps<E extends ElementType> = RefProps<E, BoxDefaultProps>;
