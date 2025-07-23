import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledPaperConfigProps,
  UnstyledPaperProps
} from '../UnstyledPaper/UnstyledPaper.types';

export type SectionDefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type SectionConfigProps = MergeProps<
  UnstyledPaperConfigProps,
  SectionDefaultProps
>;

export type SectionProps<E extends ElementType> = MergeProps<
  UnstyledPaperProps<E>,
  SectionDefaultProps
>;
