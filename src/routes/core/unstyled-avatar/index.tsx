import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledAvatarRoute: RouteObject = {
  path: '/core/unstyled-avatar',
  Component: lazy(() => import('./Page'))
};
