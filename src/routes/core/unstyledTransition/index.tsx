import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledTransitionRoute: RouteObject = {
  path: '/core/unstyled-transition',
  Component: lazy(() => import('./Page'))
};
