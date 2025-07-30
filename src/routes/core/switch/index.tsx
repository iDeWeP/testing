import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const SwitchRoute: RouteObject = {
  path: '/core/switch',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/switch/Page')
    > => import('./Page')
  )
};
