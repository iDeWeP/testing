import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledCardRoute: RouteObject = {
  path: '/core/unstyled-card',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/unstyled-list-item/Page')
    > => import('./Page')
  )
};
