import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledDropdownRoute: RouteObject = {
  path: '/core/unstyled-dropdown',
  Component: lazy(() => import('./Page'))
};
