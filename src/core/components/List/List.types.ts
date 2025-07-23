import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledPaperConfigProps,
  UnstyledPaperProps
} from '../UnstyledPaper/UnstyledPaper.types';

export type ListDefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type ListConfigProps = MergeProps<
  UnstyledPaperConfigProps,
  ListDefaultProps
>;

export type ListProps<E extends ElementType> = MergeProps<
  UnstyledPaperProps<E>,
  ListDefaultProps
>;
