import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const CloseButtonRoute: RouteObject = {
  path: '/core/close-button',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/close-button/Page')
    > => import('./Page')
  )
};
