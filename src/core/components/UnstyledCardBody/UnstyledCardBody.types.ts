import type { ElementType } from 'react';
import type { Orientation, CardPlacement, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledCardBodyDefaultProps = {
  orientation?: Orientation;
  placement?: CardPlacement;
};

export type UnstyledCardBodyConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  UnstyledCardBodyDefaultProps
>;

export type UnstyledCardBodyProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  UnstyledCardBodyDefaultProps
>;
