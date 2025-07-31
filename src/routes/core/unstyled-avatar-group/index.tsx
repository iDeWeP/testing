import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledAvatarGroupRoute: RouteObject = {
  path: '/core/unstyled-avatar-group',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/unstyled-avatar-group/Page')
    > => import('./Page')
  )
};
