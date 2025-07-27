import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledPaperRoute: RouteObject = {
  path: '/core/unstyled-paper',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/unstyled-paper/Page')
    > => import('./Page')
  )
};
