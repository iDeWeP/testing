import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const CardBodyRoute: RouteObject = {
  path: '/core/card-body',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/card-body/Page')
    > => import('./Page')
  )
};
