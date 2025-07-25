import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledCardBodyRoute: RouteObject = {
  path: '/core/unstyled-card-body',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/unstyled-card-body/Page')
    > => import('./Page')
  )
};
