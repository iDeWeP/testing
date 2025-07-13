import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const BoxRoute: RouteObject = {
  path: '/core/box',
  Component: lazy(() => import('./Page'))
};
