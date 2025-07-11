import type { ElementType } from 'react';
import type {
  Variant,
  Orientation,
  Padding,
  Radius,
  Color,
  Shadow,
  Gap,
  MergeProps
} from '../../types';
import type {
  UnstyledCardConfigProps,
  UnstyledCardProps
} from '../UnstyledCard/UnstyledCard.types';

export type CardDefaultProps = {
  variant?: Variant;
  orientation?: Orientation;
  padding?: Padding;
  radius?: Radius;
  color?: Color;
  shadow?: Shadow;
  gap?: Gap;
};

export type CardConfigProps = MergeProps<
  UnstyledCardConfigProps,
  CardDefaultProps
>;

export type CardProps<E extends ElementType> = MergeProps<
  UnstyledCardProps<E>,
  CardDefaultProps
>;
