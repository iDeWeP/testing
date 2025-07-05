import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const TitleRoute: RouteObject = {
  path: '/core/title',
  Component: lazy(() => import('./Page'))
};
