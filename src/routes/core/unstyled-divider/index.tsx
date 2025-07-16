import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledDividerRoute: RouteObject = {
  path: '/core/unstyled-divider',
  Component: lazy(() => import('./Page'))
};
