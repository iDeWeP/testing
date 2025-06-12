import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const FooterRoute: RouteObject = {
  path: '/core/Footer',
  Component: lazy(() => import('./Page'))
};
