import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const SpinnerRoute: RouteObject = {
  path: '/core/spinner',
  Component: lazy(() => import('./Page'))
};
