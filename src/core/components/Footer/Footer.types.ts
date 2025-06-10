import type { ElementType } from 'react';
import type {
  Variant,
  Orientation,
  Scale,
  Spacing,
  Margin,
  Border,
  Radius,
  Color,
  JustifyContent,
  AlignItems,
  Gap,
  RefProps
} from '../../types';

export type FooterConfigProps = {
  variant: Variant;
  orientation: Orientation;
  scale: Scale;
  spacing: Spacing;
  margin: Margin;
  border: Border;
  radius: Radius;
  color: Color;
  justify: JustifyContent;
  align: AlignItems;
  gap: Gap;
};

export type FooterDefaultProps = Partial<FooterConfigProps>;

export type FooterProps<E extends ElementType> = RefProps<
  E,
  FooterDefaultProps
>;
