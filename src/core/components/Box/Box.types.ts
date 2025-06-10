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

export type BoxConfigProps = {
  variant: Variant;
  scale: Scale;
  spacing: Spacing;
  border: Border;
  radius: Radius;
  color: Color;
};

export type BoxDefaultProps = Partial<BoxConfigProps>;

export type BoxProps<E extends ElementType> = RefProps<E, BoxDefaultProps>;
