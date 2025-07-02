import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const UnstyledPaperRoute: RouteObject = {
  path: '/core/unstyled-paper',
  Component: lazy(() => import('./Page'))
};
