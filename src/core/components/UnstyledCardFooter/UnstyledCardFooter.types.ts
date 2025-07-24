import type { ElementType } from 'react';
import type { Orientation, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledCardFooterDefaultProps = {
  orientation?: Orientation;
};

export type UnstyledCardFooterConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  UnstyledCardFooterDefaultProps
>;

export type UnstyledCardFooterProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  UnstyledCardFooterDefaultProps
>;
