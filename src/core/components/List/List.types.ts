import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledCardConfigProps,
  UnstyledCardProps
} from '../UnstyledCard/UnstyledCard.types';

export type ListDefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type ListConfigProps = MergeProps<
  UnstyledCardConfigProps,
  ListDefaultProps
>;

export type ListProps<E extends ElementType> = MergeProps<
  UnstyledCardProps<E>,
  ListDefaultProps
>;
