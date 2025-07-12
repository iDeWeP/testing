import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledContainerRoute: RouteObject = {
  path: '/core/unstyled-container',
  Component: lazy(() => import('./Page'))
};
