import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledLinearProgressRoute: RouteObject = {
  path: '/core/unstyled-linear-progress',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/unstyled-linear-progress/Page')
    > => import('./Page')
  )
};
