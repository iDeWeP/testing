import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const ListItemRoute: RouteObject = {
  path: '/core/list-item',
  Component: lazy(() => import('./Page'))
};
