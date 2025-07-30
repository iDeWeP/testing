import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const GridRoute: RouteObject = {
  path: '/core/grid',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/grid/Page')
    > => import('./Page')
  )
};
