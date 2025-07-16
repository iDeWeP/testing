import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledButtonRoute: RouteObject = {
  path: '/core/unstyled-button',
  Component: lazy(() => import('./Page'))
};
