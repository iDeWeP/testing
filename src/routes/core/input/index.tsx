import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const InputRoute: RouteObject = {
  path: '/core/input',
  Component: lazy(() => import('./Page'))
};
