import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const SidebarRoute: RouteObject = {
  path: '/core/sidebar',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/sidebar/Page')
    > => import('./Page')
  )
};
