import type { ElementType } from 'react';
import type {
  Variant,
  Orientation,
  CardPlacement,
  Padding,
  Radius,
  Color,
  Gap,
  MergeProps
} from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledCardBodyDefaultProps = {
  variant?: Variant;
  orientation?: Orientation;
  placement?: CardPlacement;
  padding?: Padding;
  radius?: Radius;
  color?: Color;
  gap?: Gap;
};

export type UnstyledCardBodyConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  UnstyledCardBodyDefaultProps
>;

export type UnstyledCardBodyProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  UnstyledCardBodyDefaultProps
>;
