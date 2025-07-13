import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const CircularProgressRoute: RouteObject = {
  path: '/core/circular-progress',
  Component: lazy(() => import('./Page'))
};
