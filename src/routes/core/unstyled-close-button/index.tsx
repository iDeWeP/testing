import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledCloseButtonRoute: RouteObject = {
  path: '/core/unstyled-close-button',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/unstyled-close-button/Page')
    > => import('./Page')
  )
};
