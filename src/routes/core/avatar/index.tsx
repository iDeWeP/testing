import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const AvatarRoute: RouteObject = {
  path: '/core/avatar',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/avatar/Page')
    > => import('./Page')
  )
};
