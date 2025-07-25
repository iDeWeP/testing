import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledLoaderRoute: RouteObject = {
  path: '/core/unstyled-loader',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/unstyled-loader/Page')
    > => import('./Page')
  )
};
