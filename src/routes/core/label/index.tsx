import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const LabelRoute: RouteObject = {
  path: '/core/label',
  Component: lazy(() => import('./Page'))
};
