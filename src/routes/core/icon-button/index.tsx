import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const IconButtonRoute: RouteObject = {
  path: '/core/icon-button',
  Component: lazy(() => import('./Page'))
};
