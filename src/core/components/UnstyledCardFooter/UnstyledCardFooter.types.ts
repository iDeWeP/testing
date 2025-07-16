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

export type UnstyledCardFooterDefaultProps = {
  variant?: Variant;
  orientation?: Orientation;
  padding?: Padding;
  radius?: Radius;
  color?: Color;
  gap?: Gap;
};

export type UnstyledCardFooterConfigProps = MergeProps<
  UnstyledCardConfigProps,
  UnstyledCardFooterDefaultProps
>;

export type UnstyledCardFooterProps<E extends ElementType> = MergeProps<
  UnstyledCardProps<E>,
  UnstyledCardFooterDefaultProps
>;
