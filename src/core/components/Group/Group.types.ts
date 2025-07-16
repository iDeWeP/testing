import type { ElementType } from 'react';
import type { Orientation, Spacing, Gap, MergeProps } from '../../types';
import type {
  UnstyledGroupConfigProps,
  UnstyledGroupProps
} from '../UnstyledGroup/UnstyledGroup.types';

export type GroupDefaultProps = {
  orientation?: Orientation;
  spacing?: Spacing;
  gap?: Gap;
};

export type GroupConfigProps = MergeProps<
  UnstyledGroupConfigProps,
  GroupDefaultProps
>;

export type GroupProps<E extends ElementType> = MergeProps<
  UnstyledGroupProps<E>,
  GroupDefaultProps
>;
