import type { ElementType } from 'react';
import type {
  Variant,
  Orientation,
  CardPlacement,
  Padding,
  Color,
  Gap,
  MergeProps
} from '../../types';
import type {
  UnstyledCardBodyConfigProps,
  UnstyledCardBodyProps
} from '../UnstyledCardBody/UnstyledCardBody.types';

type DefaultProps = {
  variant?: Variant;
  orientation?: Orientation;
  placement?: CardPlacement;
  padding?: Padding;
  color?: Color;
  gap?: Gap;
};

export type CardBodyConfigProps = MergeProps<
  UnstyledCardBodyConfigProps,
  DefaultProps
>;

export type CardBodyProps<E extends ElementType> = MergeProps<
  UnstyledCardBodyProps<E>,
  DefaultProps
>;
