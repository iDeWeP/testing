import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledLabelRoute: RouteObject = {
  path: '/core/unstyled-label',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/unstyled-label/Page')
    > => import('./Page')
  )
};
