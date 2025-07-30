import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const TextRoute: RouteObject = {
  path: '/core/text',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/text/Page')
    > => import('./Page')
  )
};
