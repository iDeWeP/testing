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

export type UnstyledCardBodyDefaultProps = {
  variant?: Variant;
  orientation?: Orientation;
  padding?: Padding;
  radius?: Radius;
  color?: Color;
  gap?: Gap;
};

export type UnstyledCardBodyConfigProps = MergeProps<
  UnstyledCardConfigProps,
  UnstyledCardBodyDefaultProps
>;

export type UnstyledCardBodyProps<E extends ElementType> = MergeProps<
  UnstyledCardProps<E>,
  UnstyledCardBodyDefaultProps
>;
