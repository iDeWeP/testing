import { Outlet, ScrollRestoration } from 'react-router';

export const RootRoute = () => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
);
