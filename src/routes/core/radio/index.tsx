import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const RadioRoute: RouteObject = {
  path: '/core/radio',
  Component: lazy(() => import('./Page'))
};
