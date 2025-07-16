import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledCardFooterRoute: RouteObject = {
  path: '/core/unstyled-card-footer',
  Component: lazy(() => import('./Page'))
};
