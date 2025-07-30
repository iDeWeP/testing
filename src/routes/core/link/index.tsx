import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const LinkRoute: RouteObject = {
  path: '/core/link',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/link/Page')
    > => import('./Page')
  )
};
