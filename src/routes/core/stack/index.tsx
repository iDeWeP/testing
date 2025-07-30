import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const StackRoute: RouteObject = {
  path: '/core/stack',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/stack/Page')
    > => import('./Page')
  )
};
