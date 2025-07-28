import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledCircularProgressRoute: RouteObject = {
  path: '/core/unstyled-circular-progress',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/unstyled-circular-progress/Page')
    > => import('./Page')
  )
};
