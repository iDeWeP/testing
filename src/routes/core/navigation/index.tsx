import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const NavigationRoute: RouteObject = {
  path: '/core/navigation',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/navigation/Page')
    > => import('./Page')
  )
};
