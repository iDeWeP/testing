import type { ElementType } from 'react';
import type { Orientation, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledListDefaultProps = {
  orientation?: Orientation;
};

export type UnstyledListConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  UnstyledListDefaultProps
>;

export type UnstyledListProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  UnstyledListDefaultProps
>;
