import type { ElementType } from 'react';
import type {
  Margin,
  Direction,
  Wrap,
  JustifyContent,
  AlignItems,
  Gap,
  RefProps
} from '../../types';
import type { BoxConfigProps } from '../Box/Box.types';

export type FlexConfigProps = {
  margin: Margin;
  direction: Direction;
  wrap: Wrap;
  justify: JustifyContent;
  align: AlignItems;
  gap: Gap;
} & BoxConfigProps;

export type FlexDefaultProps = Partial<FlexConfigProps>;

export type FlexProps<E extends ElementType> = RefProps<E, FlexDefaultProps>;
