import type { ElementType } from 'react';
import type {
  Variant,
  Orientation,
  ContainerSize,
  Radius,
  Color,
  Gap,
  MergeProps
} from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type ListItemDefaultProps = {
  variant?: Variant;
  orientation?: Orientation;
  size?: ContainerSize;
  radius?: Radius;
  color?: Color;
  gap?: Gap;
};

export type ListItemConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  ListItemDefaultProps
>;

export type ListItemProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  ListItemDefaultProps
>;
