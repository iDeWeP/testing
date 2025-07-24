import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const BadgeRoute: RouteObject = {
  path: '/core/badge',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/badge/Page')
    > => import('./Page')
  )
};
