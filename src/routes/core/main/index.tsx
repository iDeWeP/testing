import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const MainRoute: RouteObject = {
  path: '/core/main',
  Component: lazy(() => import('./Page'))
};
