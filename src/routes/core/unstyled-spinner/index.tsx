import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledSpinnerRoute: RouteObject = {
  path: '/core/unstyled-spinner',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/unstyled-spinner/Page')
    > => import('./Page')
  )
};
