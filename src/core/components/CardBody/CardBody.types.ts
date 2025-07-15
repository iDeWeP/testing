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

export type CardBodyDefaultProps = {
  variant?: Variant;
  orientation?: Orientation;
  padding?: Padding;
  radius?: Radius;
  color?: Color;
  gap?: Gap;
};

export type CardBodyConfigProps = MergeProps<
  UnstyledCardConfigProps,
  CardBodyDefaultProps
>;

export type CardBodyProps<E extends ElementType> = MergeProps<
  UnstyledCardProps<E>,
  CardBodyDefaultProps
>;
