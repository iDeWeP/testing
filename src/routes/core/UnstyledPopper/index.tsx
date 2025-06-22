import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledPopperRoute: RouteObject = {
  path: '/core/unstyled-popper',
  Component: lazy(() => import('./Page'))
};
