import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const LinkRoute: RouteObject = {
  path: '/core/link',
  Component: lazy(() => import('./Page'))
};
