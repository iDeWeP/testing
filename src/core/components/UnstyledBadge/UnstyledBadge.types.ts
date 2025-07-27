import type { ElementType } from 'react';
import type {
  CornerPlacement,
  Overlap,
  DefaultSize,
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
  placement?: CornerPlacement;
  overlap?: Overlap;
  size?: DefaultSize;
};

export type UnstyledBadgeConfigProps = MergeProps<
  UnstyledContainerConfigProps,
  UnstyledBadgeDefaultProps
>;

export type UnstyledBadgeProps<E extends ElementType> = MergeProps<
  UnstyledContainerProps<E>,
  UnstyledBadgeDefaultProps & UnstyledBadgeOptionalProps
>;
