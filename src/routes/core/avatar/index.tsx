import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const AvatarRoute: RouteObject = {
  path: '/core/avatar',
  Component: lazy(() => import('./Page'))
};
