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

export type BadgeOptionalProps = {
  max?: number;
};

export type BadgeDefaultProps = {
  showZero?: boolean;
  variant?: Variant;
  placement?: CornerPlacement;
  overlap?: Overlap;
  size?: DefaultSize;
  color?: Color;
};

export type BadgeConfigProps = MergeProps<
  UnstyledContainerConfigProps,
  BadgeDefaultProps
>;

export type BadgeProps<E extends ElementType> = MergeProps<
  UnstyledContainerProps<E>,
  BadgeDefaultProps & BadgeOptionalProps
>;
