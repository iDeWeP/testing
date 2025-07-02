import type { ElementType } from 'react';
import type {
  Orientation,
  JustifyContent,
  AlignItems,
  Gap,
  MergeProps
} from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledPaperDefaultProps = {
  orientation?: Orientation;
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: Gap;
};

export type UnstyledPaperConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  UnstyledPaperDefaultProps
>;

export type UnstyledPaperProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  UnstyledPaperDefaultProps
>;
