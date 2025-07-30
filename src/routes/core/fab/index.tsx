import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const FabRoute: RouteObject = {
  path: '/core/fab',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/fab/Page')
    > => import('./Page')
  )
};
