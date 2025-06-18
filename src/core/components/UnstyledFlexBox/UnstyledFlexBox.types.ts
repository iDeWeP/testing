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

export type UnstyledFlexBoxDefaultProps = {
  direction?: Direction;
  wrap?: Wrap;
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: Gap;
};

export type UnstyledFlexBoxConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  UnstyledFlexBoxDefaultProps
>;

export type UnstyledFlexBoxProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  UnstyledFlexBoxDefaultProps
>;
