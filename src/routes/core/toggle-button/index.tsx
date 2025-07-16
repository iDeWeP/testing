import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const ToggleButtonRoute: RouteObject = {
  path: '/core/toggle-button',
  Component: lazy(() => import('./Page'))
};
