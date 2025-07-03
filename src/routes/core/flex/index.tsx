import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledFlexRoute: RouteObject = {
  path: '/core/unstyled-flex',
  Component: lazy(() => import('./Page'))
};
