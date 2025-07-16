import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledCheckboxRoute: RouteObject = {
  path: '/core/unstyled-checkbox',
  Component: lazy(() => import('./Page'))
};
