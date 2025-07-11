import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledListConfigProps,
  UnstyledListProps
} from '../UnstyledList/UnstyledList.types';

export type NavigationDefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type NavigationConfigProps = MergeProps<
  UnstyledListConfigProps,
  NavigationDefaultProps
>;

export type NavigationProps<E extends ElementType> = MergeProps<
  UnstyledListProps<E>,
  NavigationDefaultProps
>;
