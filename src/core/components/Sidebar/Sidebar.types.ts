import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledCardConfigProps,
  UnstyledCardProps
} from '../UnstyledCard/UnstyledCard.types';

export type SidebarDefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type SidebarConfigProps = MergeProps<
  UnstyledCardConfigProps,
  SidebarDefaultProps
>;

export type SidebarProps<E extends ElementType> = MergeProps<
  UnstyledCardProps<E>,
  SidebarDefaultProps
>;
