import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const RadioRoute: RouteObject = {
  path: '/core/radio',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/radio/Page')
    > => import('./Page')
  )
};
