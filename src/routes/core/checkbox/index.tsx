import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const CheckboxRoute: RouteObject = {
  path: '/core/checkbox',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/checkbox/Page')
    > => import('./Page')
  )
};
