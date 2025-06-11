import type { ElementType } from 'react';
import type {
  Orientation,
  JustifyContent,
  AlignItems,
  Gap,
  MergeProps
} from '../../types';
import type { BoxConfigProps, BoxProps } from '../Box/Box.types';

export type LayoutConfigProps = {
  orientation?: Orientation;
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: Gap;
} & BoxConfigProps;

export type LayoutProps<E extends ElementType> = MergeProps<
  BoxProps<E>,
  LayoutConfigProps
>;
