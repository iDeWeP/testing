import type { Placement } from '../../../core/types';

export const isPlacementHorizontal = (placement: Placement): boolean =>
  placement === 'top' || placement === 'bottom';
