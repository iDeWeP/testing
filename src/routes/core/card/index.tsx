import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const TextRoute: RouteObject = {
  path: '/core/text',
  Component: lazy(() => import('./Page'))
};
