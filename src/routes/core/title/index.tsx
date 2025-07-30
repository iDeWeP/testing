import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const TitleRoute: RouteObject = {
  path: '/core/title',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/title/Page')
    > => import('./Page')
  )
};
