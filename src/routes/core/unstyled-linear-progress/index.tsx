import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledLinearProgressRoute: RouteObject = {
  path: '/core/unstyled-linear-progress',
  Component: lazy(() => import('./Page'))
};
