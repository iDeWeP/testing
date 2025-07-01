import type { ElementType } from 'react';
import type {
  Direction,
  Wrap,
  JustifyContent,
  AlignItems,
  Gap,
  MergeProps
} from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledFlexDefaultProps = {
  direction?: Direction;
  wrap?: Wrap;
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: Gap;
};

export type UnstyledFlexConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  UnstyledFlexDefaultProps
>;

export type UnstyledFlexProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  UnstyledFlexDefaultProps
>;
