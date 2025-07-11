import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledListConfigProps,
  UnstyledListProps
} from '../UnstyledList/UnstyledList.types';

export type MainDefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type MainConfigProps = MergeProps<
  UnstyledListConfigProps,
  MainDefaultProps
>;

export type MainProps<E extends ElementType> = MergeProps<
  UnstyledListProps<E>,
  MainDefaultProps
>;
