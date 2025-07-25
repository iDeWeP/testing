import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledCardFooterRoute: RouteObject = {
  path: '/core/unstyled-card-footer',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/unstyled-card-footer/Page')
    > => import('./Page')
  )
};
