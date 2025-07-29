import type { ReactNode } from 'react';
import { ScrollRestoration, Outlet } from 'react-router';

export const RootRoute = (): ReactNode => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
);
