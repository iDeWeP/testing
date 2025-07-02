import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledPopoverRoute: RouteObject = {
  path: '/core/unstyled-popover',
  Component: lazy(() => import('./Page'))
};
