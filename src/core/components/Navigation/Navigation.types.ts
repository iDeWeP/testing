import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledPaperConfigProps,
  UnstyledPaperProps
} from '../UnstyledPaper/UnstyledPaper.types';

type DefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type NavigationConfigProps = MergeProps<
  UnstyledPaperConfigProps,
  DefaultProps
>;

export type NavigationProps<E extends ElementType> = MergeProps<
  UnstyledPaperProps<E>,
  DefaultProps
>;
