import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const NavigationRoute: RouteObject = {
  path: '/core/navigation',
  Component: lazy(() => import('./Page'))
};
