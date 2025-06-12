import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const SidebarRoute: RouteObject = {
  path: '/core/sidebar',
  Component: lazy(() => import('./Page'))
};
