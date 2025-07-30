import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const CardRoute: RouteObject = {
  path: '/core/card',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/card/Page')
    > => import('./Page')
  )
};
