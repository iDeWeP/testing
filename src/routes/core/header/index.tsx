import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const HeaderRoute: RouteObject = {
  path: '/core/header',
  Component: lazy(() => import('./Page'))
};
