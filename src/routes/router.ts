import { createBrowserRouter } from 'react-router';
import { BoxRoute } from './box';
import { RootRoute } from './RootRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootRoute,
    children: [BoxRoute]
  }
]);
