import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const FooterRoute: RouteObject = {
  path: '/core/footer',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/footer/Page')
    > => import('./Page')
  )
};
