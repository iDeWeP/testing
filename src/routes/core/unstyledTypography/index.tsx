import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledTypographyRoute: RouteObject = {
  path: '/core/unstyled-typography',
  Component: lazy(() => import('./Page'))
};
