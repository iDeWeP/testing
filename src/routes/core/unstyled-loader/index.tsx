import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledLoaderRoute: RouteObject = {
  path: '/core/unstyled-loader',
  Component: lazy(() => import('./Page'))
};
