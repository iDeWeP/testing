import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const MainRoute: RouteObject = {
  path: '/core/main',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/main/Page')
    > => import('./Page')
  )
};
