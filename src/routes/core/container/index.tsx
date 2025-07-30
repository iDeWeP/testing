import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const ContainerRoute: RouteObject = {
  path: '/core/container',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/container/Page')
    > => import('./Page')
  )
};
