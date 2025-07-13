import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const DividerRoute: RouteObject = {
  path: '/core/divider',
  Component: lazy(() => import('./Page'))
};
