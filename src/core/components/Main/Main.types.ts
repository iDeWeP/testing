import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledCardConfigProps,
  UnstyledCardProps
} from '../UnstyledCard/UnstyledCard.types';

export type MainDefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type MainConfigProps = MergeProps<
  UnstyledCardConfigProps,
  MainDefaultProps
>;

export type MainProps<E extends ElementType> = MergeProps<
  UnstyledCardProps<E>,
  MainDefaultProps
>;
