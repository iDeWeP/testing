import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const SpinnerRoute: RouteObject = {
  path: '/core/spinner',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/spinner/Page')
    > => import('./Page')
  )
};
