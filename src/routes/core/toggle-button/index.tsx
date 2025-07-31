import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const ToggleButtonRoute: RouteObject = {
  path: '/core/toggle-button',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/toggle-button/Page')
    > => import('./Page')
  )
};
