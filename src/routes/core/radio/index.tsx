import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const CheckboxRoute: RouteObject = {
  path: '/core/checkbox',
  Component: lazy(() => import('./Page'))
};
