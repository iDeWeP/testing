import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledInputRoute: RouteObject = {
  path: '/core/unstyled-input',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/unstyled-input/Page')
    > => import('./Page')
  )
};
