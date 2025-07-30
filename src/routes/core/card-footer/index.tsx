import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const CardFooterRoute: RouteObject = {
  path: '/core/card-footer',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/card-footer/Page')
    > => import('./Page')
  )
};
