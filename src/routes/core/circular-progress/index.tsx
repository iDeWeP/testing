import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const CircularProgressRoute: RouteObject = {
  path: '/core/circular-progress',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/circular-progress/Page')
    > => import('./Page')
  )
};
