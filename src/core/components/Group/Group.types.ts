import type { ElementType } from 'react';
import type { Orientation, GroupGap, MergeProps } from '../../types';
import type {
  UnstyledGroupConfigProps,
  UnstyledGroupProps
} from '../UnstyledGroup/UnstyledGroup.types';

type DefaultProps = {
  orientation?: Orientation;
  gap?: GroupGap;
};

export type GroupConfigProps = MergeProps<
  UnstyledGroupConfigProps,
  DefaultProps
>;

export type GroupProps<E extends ElementType> = MergeProps<
  UnstyledGroupProps<E>,
  DefaultProps
>;
