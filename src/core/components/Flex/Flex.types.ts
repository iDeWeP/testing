import type { ElementType } from 'react';
import type {
  Direction,
  Wrap,
  JustifyContent,
  AlignItems,
  Gap,
  MergeProps
} from '../../types';
import type { BoxConfigProps, BoxProps } from '../Box/Box.types';

export type FlexConfigProps = {
  direction?: Direction;
  wrap?: Wrap;
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: Gap;
} & BoxConfigProps;

export type FlexProps<E extends ElementType> = MergeProps<
  BoxProps<E>,
  FlexConfigProps
>;
