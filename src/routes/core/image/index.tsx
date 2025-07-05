import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const ImageRoute: RouteObject = {
  path: '/core/image',
  Component: lazy(() => import('./Page'))
};
