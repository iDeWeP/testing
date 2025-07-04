import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type SidebarDefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type SidebarConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  SidebarDefaultProps
>;

export type SidebarProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  SidebarDefaultProps
>;
