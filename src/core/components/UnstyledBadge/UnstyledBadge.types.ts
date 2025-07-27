import type { ElementType } from 'react';
import type {
  Variant,
  CornerPlacement,
  Overlap,
  DefaultSize,
  Color,
  MergeProps
} from '../../types';
import type {
  UnstyledContainerConfigProps,
  UnstyledContainerProps
} from '../UnstyledContainer/UnstyledContainer.types';

export type UnstyledBadgeOptionalProps = {
  max?: number;
};

export type UnstyledBadgeDefaultProps = {
  showZero?: boolean;
  variant?: Variant;
  placement?: CornerPlacement;
  overlap?: Overlap;
  size?: DefaultSize;
  color?: Color;
};

export type UnstyledBadgeConfigProps = MergeProps<
  UnstyledContainerConfigProps,
  UnstyledBadgeDefaultProps
>;

export type UnstyledBadgeProps<E extends ElementType> = MergeProps<
  UnstyledContainerProps<E>,
  UnstyledBadgeDefaultProps & UnstyledBadgeOptionalProps
>;
