import type { ElementType } from 'react';
import type {
  Variant,
  Orientation,
  Padding,
  Color,
  Gap,
  MergeProps
} from '../../types';
import type {
  UnstyledCardConfigProps,
  UnstyledCardProps
} from '../UnstyledCard/UnstyledCard.types';

export type CardFooterDefaultProps = {
  variant?: Variant;
  orientation?: Orientation;
  padding?: Padding;
  color?: Color;
  gap?: Gap;
};

export type CardFooterConfigProps = MergeProps<
  UnstyledCardConfigProps,
  CardFooterDefaultProps
>;

export type CardFooterProps<E extends ElementType> = MergeProps<
  UnstyledCardProps<E>,
  CardFooterDefaultProps
>;
