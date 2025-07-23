import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledPaperConfigProps,
  UnstyledPaperProps
} from '../UnstyledPaper/UnstyledPaper.types';

export type MainDefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type MainConfigProps = MergeProps<
  UnstyledPaperConfigProps,
  MainDefaultProps
>;

export type MainProps<E extends ElementType> = MergeProps<
  UnstyledPaperProps<E>,
  MainDefaultProps
>;
