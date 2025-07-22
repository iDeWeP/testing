import type { MainAxis, CrossAxis, Placement } from '../../../core/types';

type Axis = {
  mainAxis: MainAxis;
  crossAxis: CrossAxis;
};

export const getAxis = (placement: Placement): Axis => {
  const placements = placement.split('-') as [MainAxis, CrossAxis];

  return { mainAxis: placements[0], crossAxis: placements[1] ?? 'center' };
};
