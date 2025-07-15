import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const IconRoute: RouteObject = {
  path: '/core/icon',
  Component: lazy(() => import('./Page'))
};
