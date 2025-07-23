import type { ElementType } from 'react';
import type { Orientation, GroupGap, MergeProps } from '../../types';
import type {
  UnstyledGroupConfigProps,
  UnstyledGroupProps
} from '../UnstyledGroup/UnstyledGroup.types';

export type GroupDefaultProps = {
  orientation?: Orientation;
  gap?: GroupGap;
};

export type GroupConfigProps = MergeProps<
  UnstyledGroupConfigProps,
  GroupDefaultProps
>;

export type GroupProps<E extends ElementType> = MergeProps<
  UnstyledGroupProps<E>,
  GroupDefaultProps
>;
