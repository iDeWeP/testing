import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledGroupRoute: RouteObject = {
  path: '/core/unstyled-group',
  Component: lazy(() => import('./Page'))
};
