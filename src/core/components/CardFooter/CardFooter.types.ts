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
  UnstyledCardFooterConfigProps,
  UnstyledCardFooterProps
} from '../UnstyledCardFooter/UnstyledCardFooter.types';

export type CardFooterDefaultProps = {
  variant?: Variant;
  orientation?: Orientation;
  padding?: Padding;
  radius?: Radius;
  color?: Color;
  gap?: Gap;
};

export type CardFooterConfigProps = MergeProps<
  UnstyledCardFooterConfigProps,
  CardFooterDefaultProps
>;

export type CardFooterProps<E extends ElementType> = MergeProps<
  UnstyledCardFooterProps<E>,
  CardFooterDefaultProps
>;
