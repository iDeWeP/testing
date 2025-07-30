import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const DropdownRoute: RouteObject = {
  path: '/core/dropdown',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/dropdown/Page')
    > => import('./Page')
  )
};
