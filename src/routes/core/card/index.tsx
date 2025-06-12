import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const CardRoute: RouteObject = {
  path: '/core/card',
  Component: lazy(() => import('./Page'))
};
