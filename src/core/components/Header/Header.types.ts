import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledPaperConfigProps,
  UnstyledPaperProps
} from '../UnstyledPaper/UnstyledPaper.types';

export type HeaderDefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type HeaderConfigProps = MergeProps<
  UnstyledPaperConfigProps,
  HeaderDefaultProps
>;

export type HeaderProps<E extends ElementType> = MergeProps<
  UnstyledPaperProps<E>,
  HeaderDefaultProps
>;
