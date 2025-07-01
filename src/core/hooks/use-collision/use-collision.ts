import { useEffect } from 'react';
import type { Placement } from '../../types';

export const useCollision = (
  placement: Placement,
  onCollision?: (placement: Placement) => void
) =>
  useEffect(() => {
    if (onCollision) {
      onCollision(placement);
    }
  }, [placement, onCollision]);
