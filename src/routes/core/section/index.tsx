import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const SectionRoute: RouteObject = {
  path: '/core/section',
  Component: lazy(() => import('./Page'))
};
