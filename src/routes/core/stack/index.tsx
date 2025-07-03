import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const StackRoute: RouteObject = {
  path: '/core/stack',
  Component: lazy(() => import('./Page'))
};
