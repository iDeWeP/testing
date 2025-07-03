import type { ElementType } from 'react';
import type { Gap, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type GridDefaultProps = {
  gap?: Gap;
  gx?: Gap;
  gy?: Gap;
};

export type GridConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  GridDefaultProps
>;

export type GridProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  GridDefaultProps
>;
