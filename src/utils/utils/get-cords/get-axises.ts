import type { MainAxis, CrossAxis, Placement } from '../../../core/types';

type GetAxisesReturn = {
  mainAxis: MainAxis;
  crossAxis: CrossAxis;
};

export const getAxises = (placement: Placement): GetAxisesReturn => {
  const placements = placement.split('-') as [MainAxis, CrossAxis];

  return { mainAxis: placements[0], crossAxis: placements[1] ?? 'center' };
};
