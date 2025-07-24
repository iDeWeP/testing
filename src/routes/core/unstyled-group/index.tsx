import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledGroupRoute: RouteObject = {
  path: '/core/unstyled-group',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/unstyled-group/Page')
    > => import('./Page')
  )
};
