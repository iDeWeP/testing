import type { ElementType } from 'react';
import type {
  DefaultVariant,
  Scale,
  Spacing,
  Border,
  Radius,
  DefaultColor,
  RefProps
} from '../../types';

export type BoxConfigProps = {
  variant: DefaultVariant;
  scale: Scale;
  spacing: Spacing;
  border: Border;
  radius: Radius;
  color: DefaultColor;
};

export type BoxDefaultProps = Partial<BoxConfigProps>;

export type BoxProps<E extends ElementType> = RefProps<E, BoxDefaultProps>;
