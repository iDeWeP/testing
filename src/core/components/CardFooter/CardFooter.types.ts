import type { ElementType } from 'react';
import type {
  Variant,
  Orientation,
  Padding,
  Color,
  Gap,
  MergeProps,
  OmitPlacement
} from '../../types';
import type {
  UnstyledCardBodyConfigProps,
  UnstyledCardBodyProps
} from '../UnstyledCardBody/UnstyledCardBody.types';

type DefaultProps = {
  variant?: Variant;
  orientation?: Orientation;
  padding?: Padding;
  color?: Color;
  gap?: Gap;
};

export type CardFooterConfigProps = MergeProps<
  OmitPlacement<UnstyledCardBodyConfigProps>,
  DefaultProps
>;

export type CardFooterProps<E extends ElementType> = MergeProps<
  OmitPlacement<UnstyledCardBodyProps<E>>,
  DefaultProps
>;
