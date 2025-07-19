import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const LinearProgressRoute: RouteObject = {
  path: '/core/linear-progress',
  Component: lazy(() => import('./Page'))
};
