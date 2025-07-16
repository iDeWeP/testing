import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const GroupRoute: RouteObject = {
  path: '/core/group',
  Component: lazy(() => import('./Page'))
};
