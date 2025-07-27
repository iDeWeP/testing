import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledBadgeRoute: RouteObject = {
  path: '/core/unstyled-badge',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/unstyled-badge/Page')
    > => import('./Page')
  )
};
