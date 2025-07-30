import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const DividerRoute: RouteObject = {
  path: '/core/divider',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/divider/Page')
    > => import('./Page')
  )
};
