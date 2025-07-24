import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledContainerRoute: RouteObject = {
  path: '/core/unstyled-container',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/unstyled-container/Page')
    > => import('./Page')
  )
};
