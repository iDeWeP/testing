import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const AnchorRoute: RouteObject = {
  path: '/core/anchor',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/anchor/Page')
    > => import('./Page')
  )
};
