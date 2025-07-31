import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const PaperRoute: RouteObject = {
  path: '/core/paper',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/paper/Page')
    > => import('./Page')
  )
};
