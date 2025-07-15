import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const AvatarGroupRoute: RouteObject = {
  path: '/core/avatar-group',
  Component: lazy(() => import('./Page'))
};
