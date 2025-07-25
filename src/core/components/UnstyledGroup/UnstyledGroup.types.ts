import type { ElementType } from 'react';
import type { Orientation, GroupGap, MergeProps, OmitGap } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledGroupDefaultProps = {
  orientation?: Orientation;
  gap?: GroupGap;
};

export type UnstyledGroupConfigProps = MergeProps<
  OmitGap<UnstyledBoxConfigProps>,
  UnstyledGroupDefaultProps
>;

export type UnstyledGroupProps<E extends ElementType> = MergeProps<
  OmitGap<UnstyledBoxProps<E>>,
  UnstyledGroupDefaultProps
>;
