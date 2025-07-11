import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledListConfigProps,
  UnstyledListProps
} from '../UnstyledList/UnstyledList.types';

export type SidebarDefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type SidebarConfigProps = MergeProps<
  UnstyledListConfigProps,
  SidebarDefaultProps
>;

export type SidebarProps<E extends ElementType> = MergeProps<
  UnstyledListProps<E>,
  SidebarDefaultProps
>;
