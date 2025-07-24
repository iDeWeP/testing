import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledAvatarRoute: RouteObject = {
  path: '/core/unstyled-avatar',
  Component: lazy(
    (): Promise<
      typeof import('/Users/ritchiw/vscode/testing/src/routes/core/unstyled-avatar/Page')
    > => import('./Page')
  )
};
