import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const AvatarGroupRoute: RouteObject = {
  path: '/core/avatar-group',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/avatar-group/Page')
    > => import('./Page')
  )
};
