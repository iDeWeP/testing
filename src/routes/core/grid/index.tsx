import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const GridRoute: RouteObject = {
  path: '/core/grid',
  Component: lazy(() => import('./Page'))
};
