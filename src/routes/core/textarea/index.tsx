import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const TextareaRoute: RouteObject = {
  path: '/core/textarea',
  Component: lazy(() => import('./Page'))
};
