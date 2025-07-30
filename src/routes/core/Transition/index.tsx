import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const TransitionRoute: RouteObject = {
  path: '/core/transition',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/transition/Page')
    > => import('./Page')
  )
};
