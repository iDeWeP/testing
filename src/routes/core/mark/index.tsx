import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const MarkRoute: RouteObject = {
  path: '/core/mark',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/mark/Page')
    > => import('./Page')
  )
};
