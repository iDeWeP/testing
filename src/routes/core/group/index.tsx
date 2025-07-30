import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const GroupRoute: RouteObject = {
  path: '/core/group',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/group/Page')
    > => import('./Page')
  )
};
