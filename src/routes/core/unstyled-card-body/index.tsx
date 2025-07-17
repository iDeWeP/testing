import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledCardBodyRoute: RouteObject = {
  path: '/core/unstyled-card-body',
  Component: lazy(() => import('./Page'))
};
