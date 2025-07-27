import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledDividerRoute: RouteObject = {
  path: '/core/unstyled-divider',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/unstyled-divider/Page')
    > => import('./Page')
  )
};
