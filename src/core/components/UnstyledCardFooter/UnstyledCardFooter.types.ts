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
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledCardFooterDefaultProps = {
  variant?: Variant;
  orientation?: Orientation;
  padding?: Padding;
  radius?: Radius;
  color?: Color;
  gap?: Gap;
};

export type UnstyledCardFooterConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  UnstyledCardFooterDefaultProps
>;

export type UnstyledCardFooterProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  UnstyledCardFooterDefaultProps
>;
