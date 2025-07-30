import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const ListRoute: RouteObject = {
  path: '/core/list',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/list/Page')
    > => import('./Page')
  )
};
