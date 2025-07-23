import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledPaperConfigProps,
  UnstyledPaperProps
} from '../UnstyledPaper/UnstyledPaper.types';

export type FooterDefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type FooterConfigProps = MergeProps<
  UnstyledPaperConfigProps,
  FooterDefaultProps
>;

export type FooterProps<E extends ElementType> = MergeProps<
  UnstyledPaperProps<E>,
  FooterDefaultProps
>;
