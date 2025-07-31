import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledTypographyRoute: RouteObject = {
  path: '/core/unstyled-typography',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/unstyled-typography/Page')
    > => import('./Page')
  )
};
