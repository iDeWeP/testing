import type { ElementType } from 'react';
import type { Orientation, MergeProps, OmitGaps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledCardFooterDefaultProps = {
  orientation?: Orientation;
};

export type UnstyledCardFooterConfigProps = MergeProps<
  OmitGaps<UnstyledBoxConfigProps>,
  UnstyledCardFooterDefaultProps
>;

export type UnstyledCardFooterProps<E extends ElementType> = MergeProps<
  OmitGaps<UnstyledBoxProps<E>>,
  UnstyledCardFooterDefaultProps
>;
