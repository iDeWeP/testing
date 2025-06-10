import { createBrowserRouter } from 'react-router';
import { BoxRoute } from './core/box';
import { RootRoute } from './RootRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootRoute,
    children: [BoxRoute]
  }
]);
