import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const CardBodyRoute: RouteObject = {
  path: '/core/card-body',
  Component: lazy(() => import('./Page'))
};
