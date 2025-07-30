import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const InputRoute: RouteObject = {
  path: '/core/input',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/input/Page')
    > => import('./Page')
  )
};
