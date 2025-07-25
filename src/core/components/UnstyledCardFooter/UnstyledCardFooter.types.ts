import type { ElementType } from 'react';
import type { Orientation, MergeProps, OmitGap } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledCardFooterDefaultProps = {
  orientation?: Orientation;
};

export type UnstyledCardFooterConfigProps = MergeProps<
  OmitGap<UnstyledBoxConfigProps>,
  UnstyledCardFooterDefaultProps
>;

export type UnstyledCardFooterProps<E extends ElementType> = MergeProps<
  OmitGap<UnstyledBoxProps<E>>,
  UnstyledCardFooterDefaultProps
>;
