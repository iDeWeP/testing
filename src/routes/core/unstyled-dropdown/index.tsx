import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledDropdownRoute: RouteObject = {
  path: '/core/unstyled-dropdown',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/unstyled-dropdown/Page')
    > => import('./Page')
  )
};
