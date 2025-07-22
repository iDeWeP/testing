import type { MainAxis, CrossAxis, Placement } from '../../../core/types';

type Axis = {
  main: MainAxis;
  cross: CrossAxis;
};

export const getAxis = (placement: Placement): Axis => {
  const placements = placement.split('-') as [MainAxis, CrossAxis];

  return { main: placements[0], cross: placements[1] ?? 'center' };
};
