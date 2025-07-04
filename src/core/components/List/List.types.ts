import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type ListDefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type ListConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  ListDefaultProps
>;

export type ListProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  ListDefaultProps
>;
