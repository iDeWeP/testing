import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const LinearProgressRoute: RouteObject = {
  path: '/core/linear-progress',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/linear-progress/Page')
    > => import('./Page')
  )
};
