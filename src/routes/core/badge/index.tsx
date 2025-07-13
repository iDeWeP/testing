import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const BadgeRoute: RouteObject = {
  path: '/core/badge',
  Component: lazy(() => import('./Page'))
};
