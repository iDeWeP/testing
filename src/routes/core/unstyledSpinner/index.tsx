import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledSpinnerRoute: RouteObject = {
  path: '/core/unstyled-spinner',
  Component: lazy(() => import('./Page'))
};
