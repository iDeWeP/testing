import type { Placement } from '../../../core/types';

export const isPlacementHorizontal = (placement: Placement) =>
  placement === 'top' || placement === 'bottom';
