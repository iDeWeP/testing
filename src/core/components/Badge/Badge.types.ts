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
  UnstyledBadgeConfigProps,
  UnstyledBadgeProps
} from '../UnstyledBadge/UnstyledBadge.types';

type OptionalProps = {
  max?: number;
};

type DefaultProps = {
  showZero?: boolean;
  variant?: Variant;
  placement?: CornerPlacement;
  overlap?: Overlap;
  size?: DefaultSize;
  color?: Color;
};

export type BadgeConfigProps = MergeProps<
  UnstyledBadgeConfigProps,
  DefaultProps
>;

export type BadgeProps<E extends ElementType> = MergeProps<
  UnstyledBadgeProps<E>,
  DefaultProps & OptionalProps
>;
