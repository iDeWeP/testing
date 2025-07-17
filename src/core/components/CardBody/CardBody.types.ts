import type { ElementType } from 'react';
import type {
  Variant,
  Orientation,
  CardPlacement,
  Padding,
  Radius,
  Color,
  Gap,
  MergeProps
} from '../../types';
import type {
  UnstyledCardBodyConfigProps,
  UnstyledCardBodyProps
} from '../UnstyledCardBody/UnstyledCardBody.types';

export type CardBodyDefaultProps = {
  variant?: Variant;
  orientation?: Orientation;
  placement?: CardPlacement;
  padding?: Padding;
  radius?: Radius;
  color?: Color;
  gap?: Gap;
};

export type CardBodyConfigProps = MergeProps<
  UnstyledCardBodyConfigProps,
  CardBodyDefaultProps
>;

export type CardBodyProps<E extends ElementType> = MergeProps<
  UnstyledCardBodyProps<E>,
  CardBodyDefaultProps
>;
