import type { ElementType } from 'react';
import type {
  Variant,
  Orientation,
  Padding,
  Radius,
  Color,
  Gap,
  MergeProps
} from '../../types';
import type {
  UnstyledCardConfigProps,
  UnstyledCardProps
} from '../UnstyledCard/UnstyledCard.types';

export type ListItemDefaultProps = {
  variant?: Variant;
  orientation?: Orientation;
  padding?: Padding;
  radius?: Radius;
  color?: Color;
  gap?: Gap;
};

export type ListItemConfigProps = MergeProps<
  UnstyledCardConfigProps,
  ListItemDefaultProps
>;

export type ListItemProps<E extends ElementType> = MergeProps<
  UnstyledCardProps<E>,
  ListItemDefaultProps
>;
