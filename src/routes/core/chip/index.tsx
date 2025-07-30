import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const ChipRoute: RouteObject = {
  path: '/core/chip',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/chip/Page')
    > => import('./Page')
  )
};
