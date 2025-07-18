import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledCloseButtonRoute: RouteObject = {
  path: '/core/unstyled-close-button',
  Component: lazy(() => import('./Page'))
};
