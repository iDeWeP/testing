import type { ElementType } from 'react';
import type { Orientation, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledPaperDefaultProps = {
  orientation?: Orientation;
};

export type UnstyledPaperConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  UnstyledPaperDefaultProps
>;

export type UnstyledPaperProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  UnstyledPaperDefaultProps
>;
