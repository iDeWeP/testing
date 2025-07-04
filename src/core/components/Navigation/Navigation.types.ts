import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type NavigationDefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type NavigationConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  NavigationDefaultProps
>;

export type NavigationProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  NavigationDefaultProps
>;
