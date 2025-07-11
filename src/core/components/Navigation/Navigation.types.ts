import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledCardConfigProps,
  UnstyledCardProps
} from '../UnstyledCard/UnstyledCard.types';

export type NavigationDefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type NavigationConfigProps = MergeProps<
  UnstyledCardConfigProps,
  NavigationDefaultProps
>;

export type NavigationProps<E extends ElementType> = MergeProps<
  UnstyledCardProps<E>,
  NavigationDefaultProps
>;
