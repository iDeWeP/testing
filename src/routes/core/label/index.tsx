import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const LabelRoute: RouteObject = {
  path: '/core/label',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/label/Page')
    > => import('./Page')
  )
};
