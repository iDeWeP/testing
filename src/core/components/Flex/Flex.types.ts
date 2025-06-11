import type { ElementType } from 'react';
import type {
  Direction,
  Wrap,
  JustifyContent,
  AlignItems,
  Gap
} from '../../types';
import type { BoxConfigProps, BoxProps } from '../Box/Box.types';

type FlexDefaultProps = {
  direction?: Direction;
  wrap?: Wrap;
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: Gap;
};

export type FlexConfigProps = FlexDefaultProps & BoxConfigProps;

export type FlexProps<E extends ElementType> = Omit<
  BoxProps<E>,
  keyof FlexDefaultProps
> &
  FlexDefaultProps;
