import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const IconRoute: RouteObject = {
  path: '/core/icon',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/icon/Page')
    > => import('./Page')
  )
};
