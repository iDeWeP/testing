import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const ListItemRoute: RouteObject = {
  path: '/core/list-item',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/list-item/Page')
    > => import('./Page')
  )
};
