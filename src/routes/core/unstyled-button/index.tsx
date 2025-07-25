import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledButtonRoute: RouteObject = {
  path: '/core/unstyled-button',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/unstyled-button/Page')
    > => import('./Page')
  )
};
