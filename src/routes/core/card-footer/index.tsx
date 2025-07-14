import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const CardFooterRoute: RouteObject = {
  path: '/core/card-footer',
  Component: lazy(() => import('./Page'))
};
