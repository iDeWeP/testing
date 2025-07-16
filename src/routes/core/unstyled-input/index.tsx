import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledInputRoute: RouteObject = {
  path: '/core/unstyled-input',
  Component: lazy(() => import('./Page'))
};
