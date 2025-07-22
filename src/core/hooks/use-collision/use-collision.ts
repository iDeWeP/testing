import { useEffect } from 'react';
import type { Placement } from '../../types';

export type CollisionFunction = (placement: Placement) => void;

export const useCollision = (
  placement: Placement,
  onCollision?: CollisionFunction
): void =>
  useEffect(() => {
    if (onCollision) {
      onCollision(placement);
    }
  }, [placement, onCollision]);
