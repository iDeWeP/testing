import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const ChipRoute: RouteObject = {
  path: '/core/chip',
  Component: lazy(() => import('./Page'))
};
