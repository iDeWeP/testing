import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const SectionRoute: RouteObject = {
  path: '/core/section',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/section/Page')
    > => import('./Page')
  )
};
