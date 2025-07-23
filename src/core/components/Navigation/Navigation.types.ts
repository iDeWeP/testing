import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledPaperConfigProps,
  UnstyledPaperProps
} from '../UnstyledPaper/UnstyledPaper.types';

export type NavigationDefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type NavigationConfigProps = MergeProps<
  UnstyledPaperConfigProps,
  NavigationDefaultProps
>;

export type NavigationProps<E extends ElementType> = MergeProps<
  UnstyledPaperProps<E>,
  NavigationDefaultProps
>;
