import type { ElementType } from 'react';
import type { Orientation, GroupGap, MergeProps, OmitGaps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledGroupDefaultProps = {
  orientation?: Orientation;
  gap?: GroupGap;
};

export type UnstyledGroupConfigProps = MergeProps<
  OmitGaps<UnstyledBoxConfigProps>,
  UnstyledGroupDefaultProps
>;

export type UnstyledGroupProps<E extends ElementType> = MergeProps<
  OmitGaps<UnstyledBoxProps<E>>,
  UnstyledGroupDefaultProps
>;
