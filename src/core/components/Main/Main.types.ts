import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type MainDefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type MainConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  MainDefaultProps
>;

export type MainProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  MainDefaultProps
>;
