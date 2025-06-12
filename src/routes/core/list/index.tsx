import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const ListRoute: RouteObject = {
  path: '/core/list',
  Component: lazy(() => import('./Page'))
};
