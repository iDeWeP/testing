import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledSwitchRoute: RouteObject = {
  path: '/core/unstyled-switch',
  Component: lazy(() => import('./Page'))
};
