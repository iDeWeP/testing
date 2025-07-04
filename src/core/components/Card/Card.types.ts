import type { ElementType } from 'react';
import type {
  Variant,
  Orientation,
  ContainerSize,
  Radius,
  Color,
  Shadow,
  Gap,
  MergeProps
} from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type CardDefaultProps = {
  variant?: Variant;
  orientation?: Orientation;
  size?: ContainerSize;
  radius?: Radius;
  color?: Color;
  shadow?: Shadow;
  gap?: Gap;
};

export type CardConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  CardDefaultProps
>;

export type CardProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  CardDefaultProps
>;
