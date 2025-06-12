import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const FlexRoute: RouteObject = {
  path: '/core/flex',
  Component: lazy(() => import('./Page'))
};
