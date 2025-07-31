import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const BoxRoute: RouteObject = {
  path: '/core/box',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/box/Page')
    > => import('./Page')
  )
};
