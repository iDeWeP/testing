import type { ElementType } from 'react';
import type { Orientation, CardSize, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledCardDefaultProps = {
  orientation?: Orientation;
  size?: CardSize;
};

export type UnstyledCardConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  UnstyledCardDefaultProps
>;

export type UnstyledCardProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  UnstyledCardDefaultProps
>;
