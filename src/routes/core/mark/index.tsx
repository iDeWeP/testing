import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const MarkRoute: RouteObject = {
  path: '/core/mark',
  Component: lazy(() => import('./Page'))
};
