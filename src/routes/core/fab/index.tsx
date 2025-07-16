import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const FabRoute: RouteObject = {
  path: '/core/fab',
  Component: lazy(() => import('./Page'))
};
