import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const TextareaRoute: RouteObject = {
  path: '/core/textarea',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/textarea/Page')
    > => import('./Page')
  )
};
