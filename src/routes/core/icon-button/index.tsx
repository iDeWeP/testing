import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const IconButtonRoute: RouteObject = {
  path: '/core/icon-button',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/icon-button/Page')
    > => import('./Page')
  )
};
