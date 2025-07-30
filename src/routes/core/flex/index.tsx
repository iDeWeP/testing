import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const FlexRoute: RouteObject = {
  path: '/core/flex',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/flex/Page')
    > => import('./Page')
  )
};
