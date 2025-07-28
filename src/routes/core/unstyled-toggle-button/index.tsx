import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledToggleButtonRoute: RouteObject = {
  path: '/core/unstyled-toggle-button',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/unstyled-toggle-button/Page')
    > => import('./Page')
  )
};
