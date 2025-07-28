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

type OptionalProps = {
  max?: number;
};

type DefaultProps = {
  showZero?: boolean;
  placement?: CornerPlacement;
  overlap?: Overlap;
  size?: DefaultSize;
};

export type UnstyledBadgeConfigProps = MergeProps<
  UnstyledContainerConfigProps,
  DefaultProps
>;

export type UnstyledBadgeProps<E extends ElementType> = MergeProps<
  UnstyledContainerProps<E>,
  DefaultProps & OptionalProps
>;
