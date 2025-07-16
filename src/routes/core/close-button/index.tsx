import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const CloseButtonRoute: RouteObject = {
  path: '/core/close-button',
  Component: lazy(() => import('./Page'))
};
