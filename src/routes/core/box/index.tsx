import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const BoxRoute: RouteObject = {
  path: '/react/basic/box',
  Component: lazy(() => import('./Page'))
};
