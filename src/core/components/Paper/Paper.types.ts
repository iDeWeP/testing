import type { ElementType } from 'react';
import type {
  Variant,
  Orientation,
  Padding,
  Radius,
  Color,
  Shadow,
  Gap,
  MergeProps
} from '../../types';
import type {
  UnstyledPaperConfigProps,
  UnstyledPaperProps
} from '../UnstyledPaper/UnstyledPaper.types';

export type PaperDefaultProps = {
  variant?: Variant;
  orientation?: Orientation;
  padding?: Padding;
  radius?: Radius;
  color?: Color;
  shadow?: Shadow;
  gap?: Gap;
};

export type PaperConfigProps = MergeProps<
  UnstyledPaperConfigProps,
  PaperDefaultProps
>;

export type PaperProps<E extends ElementType> = MergeProps<
  UnstyledPaperProps<E>,
  PaperDefaultProps
>;
