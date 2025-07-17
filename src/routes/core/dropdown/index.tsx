import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const DropdownRoute: RouteObject = {
  path: '/core/dropdown',
  Component: lazy(() => import('./Page'))
};
