import type { Radius, CardPlacement } from '../../types';

type AutoRadius = {
  type: 'all' | 't' | 'b';
  radius: Radius;
};

type PlacementMap = Record<CardPlacement, (radius: Radius) => AutoRadius>;

const placementMap: PlacementMap = {
  default: (radius): AutoRadius => ({ type: 'all', radius }),
  center: (): AutoRadius => ({ type: 'all', radius: 'unset' }),
  top: (radius): AutoRadius => ({ type: 't', radius }),
  bottom: (radius): AutoRadius => ({ type: 'b', radius })
};

export const getCardRadius = (
  placement: CardPlacement,
  radius: Radius
): AutoRadius => placementMap[placement](radius);
