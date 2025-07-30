import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const ButtonRoute: RouteObject = {
  path: '/core/button',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/button/Page')
    > => import('./Page')
  )
};
