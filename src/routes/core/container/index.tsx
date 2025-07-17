import { lazy } from 'react';
import type { RouteObject } from 'react-router';

export const ContainerRoute: RouteObject = {
  path: '/core/container',
  Component: lazy(() => import('./Page'))
};
