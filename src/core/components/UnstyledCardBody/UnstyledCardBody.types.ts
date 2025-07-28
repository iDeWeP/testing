import type { ElementType } from 'react';
import type {
  Orientation,
  CardPlacement,
  MergeProps,
  OmitGaps
} from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

type DefaultProps = {
  orientation?: Orientation;
  placement?: CardPlacement;
};

export type UnstyledCardBodyConfigProps = MergeProps<
  OmitGaps<UnstyledBoxConfigProps>,
  DefaultProps
>;

export type UnstyledCardBodyProps<E extends ElementType> = MergeProps<
  OmitGaps<UnstyledBoxProps<E>>,
  DefaultProps
>;
