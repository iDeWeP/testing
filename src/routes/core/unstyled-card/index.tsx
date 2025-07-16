import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledCardRoute: RouteObject = {
  path: '/core/unstyled-card',
  Component: lazy(() => import('./Page'))
};
