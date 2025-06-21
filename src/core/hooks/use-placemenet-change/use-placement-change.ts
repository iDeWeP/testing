import { useEffect } from 'react';
import type { Placement } from '../../types';

export const usePlacementChange = (
  placement: Placement,
  onPlacementChange?: (placement: Placement) => void
) =>
  useEffect(() => {
    if (onPlacementChange) {
      onPlacementChange(placement);
    }
  }, [placement, onPlacementChange]);
