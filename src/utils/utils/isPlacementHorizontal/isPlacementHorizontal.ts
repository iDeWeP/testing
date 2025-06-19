import type { Placement } from '../../../core/types';

const isPlacementHorizontal = (placement: Placement): boolean =>
  placement === 'top' || placement === 'bottom';

export default isPlacementHorizontal;
