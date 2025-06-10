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

export type LayoutConfigProps = {
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

export type LayoutDefaultProps = Partial<LayoutConfigProps>;

export type LayoutProps<E extends ElementType> = RefProps<
  E,
  LayoutDefaultProps
>;
