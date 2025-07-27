import type { ElementType } from 'react';
import type { Orientation, MergeProps, OmitGaps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledPaperDefaultProps = {
  orientation?: Orientation;
};

export type UnstyledPaperConfigProps = MergeProps<
  OmitGaps<UnstyledBoxConfigProps>,
  UnstyledPaperDefaultProps
>;

export type UnstyledPaperProps<E extends ElementType> = MergeProps<
  OmitGaps<UnstyledBoxProps<E>>,
  UnstyledPaperDefaultProps
>;
