import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const ImageRoute: RouteObject = {
  path: '/core/image',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/image/Page')
    > => import('./Page')
  )
};
