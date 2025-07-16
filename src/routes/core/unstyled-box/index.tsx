import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledBoxRoute: RouteObject = {
  path: '/core/unstyled-box',
  Component: lazy(() => import('./Page'))
};
