import type { ElementType } from 'react';
import type {
  Variant,
  Scale,
  Spacing,
  Border,
  Radius,
  Color,
  RefProps
} from '../../types';

export type BoxDefaultProps = {
  variant?: Variant;
  scale?: Scale;
  spacing?: Spacing;
  border?: Border;
  radius?: Radius;
  color?: Color;
};

export type BoxProps<E extends ElementType> = RefProps<E, BoxDefaultProps>;
