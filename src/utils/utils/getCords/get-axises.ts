import type { Placement, MainAxis, CrossAxis } from '../../../core/types';

export const getAxises = (placement: Placement): [MainAxis, CrossAxis] => {
  const placements = placement.split('-') as [MainAxis, CrossAxis];

  return [placements[0], placements[1] ?? 'center'];
};
