import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledFlexBoxRoute: RouteObject = {
  path: '/core/unstyled-flex-box',
  Component: lazy(() => import('./Page'))
};
