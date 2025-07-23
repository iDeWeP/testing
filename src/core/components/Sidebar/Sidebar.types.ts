import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledPaperConfigProps,
  UnstyledPaperProps
} from '../UnstyledPaper/UnstyledPaper.types';

export type SidebarDefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type SidebarConfigProps = MergeProps<
  UnstyledPaperConfigProps,
  SidebarDefaultProps
>;

export type SidebarProps<E extends ElementType> = MergeProps<
  UnstyledPaperProps<E>,
  SidebarDefaultProps
>;
