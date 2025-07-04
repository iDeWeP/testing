import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const TransitionRoute: RouteObject = {
  path: '/core/transition',
  Component: lazy(() => import('./Page'))
};
