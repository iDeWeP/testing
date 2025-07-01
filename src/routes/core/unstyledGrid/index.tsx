import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledGridRoute: RouteObject = {
  path: '/core/unstyled-grid',
  Component: lazy(() => import('./Page'))
};
