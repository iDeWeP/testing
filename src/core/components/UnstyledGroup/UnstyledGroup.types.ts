import type { ElementType } from 'react';
import type { Orientation, GroupGap, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledGroupDefaultProps = {
  orientation?: Orientation;
  gap?: GroupGap;
};

export type UnstyledGroupConfigProps = MergeProps<
  Omit<UnstyledBoxConfigProps, 'gx' | 'gy'>,
  UnstyledGroupDefaultProps
>;

export type UnstyledGroupProps<E extends ElementType> = MergeProps<
  Omit<UnstyledBoxProps<E>, 'gx' | 'gy'>,
  UnstyledGroupDefaultProps
>;
