import type { ElementType } from 'react';
import type {
  Orientation,
  CardPlacement,
  MergeProps,
  OmitGap
} from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledCardBodyDefaultProps = {
  orientation?: Orientation;
  placement?: CardPlacement;
};

export type UnstyledCardBodyConfigProps = MergeProps<
  OmitGap<UnstyledBoxConfigProps>,
  UnstyledCardBodyDefaultProps
>;

export type UnstyledCardBodyProps<E extends ElementType> = MergeProps<
  OmitGap<UnstyledBoxProps<E>>,
  UnstyledCardBodyDefaultProps
>;
