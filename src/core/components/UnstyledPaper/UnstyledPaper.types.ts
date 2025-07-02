import type { ElementType } from 'react';
import type {
  Orientation,
  Shadow,
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
  shadow?: Shadow;
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
