import type { FC } from 'react';
import { ScrollRestoration, Outlet } from 'react-router';

export const RootRoute: FC = () => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
);
