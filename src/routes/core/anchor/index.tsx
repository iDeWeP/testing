import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const AnchorRoute: RouteObject = {
  path: '/core/anchor',
  Component: lazy(() => import('./Page'))
};
