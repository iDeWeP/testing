import type { ElementType } from 'react';
import type { Gap, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type StackDefaultProps = {
  gap?: Gap;
};

export type StackConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  StackDefaultProps
>;

export type StackProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  StackDefaultProps
>;
