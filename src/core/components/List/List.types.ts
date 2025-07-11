import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledListConfigProps,
  UnstyledListProps
} from '../UnstyledList/UnstyledList.types';

export type ListDefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type ListConfigProps = MergeProps<
  UnstyledListConfigProps,
  ListDefaultProps
>;

export type ListProps<E extends ElementType> = MergeProps<
  UnstyledListProps<E>,
  ListDefaultProps
>;
