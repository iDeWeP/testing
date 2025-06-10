import type { ElementType } from 'react';
import type {
  Scale,
  Spacing,
  Margin,
  Direction,
  Wrap,
  JustifyContent,
  AlignItems,
  Gap,
  RefProps
} from '../../types';

export type FlexConfigProps = {
  scale: Scale;
  spacing: Spacing;
  margin: Margin;
  direction: Direction;
  wrap: Wrap;
  justify: JustifyContent;
  align: AlignItems;
  gap: Gap;
};

export type FlexDefaultProps = Partial<FlexConfigProps>;

export type FlexProps<E extends ElementType> = RefProps<E, FlexDefaultProps>;
