import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledCheckboxRoute: RouteObject = {
  path: '/core/unstyled-checkbox',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/unstyled-checkbox/Page')
    > => import('./Page')
  )
};
