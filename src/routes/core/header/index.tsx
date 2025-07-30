import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const HeaderRoute: RouteObject = {
  path: '/core/header',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/header/Page')
    > => import('./Page')
  )
};
