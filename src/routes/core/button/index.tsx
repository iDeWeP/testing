import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const ButtonRoute: RouteObject = {
  path: '/core/button',
  Component: lazy(() => import('./Page'))
};
