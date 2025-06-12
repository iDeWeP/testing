import { createBrowserRouter } from 'react-router';
import { BoxRoute } from './core/box';
import { CardRoute } from './core/card';
import { FlexRoute } from './core/flex';
import { RootRoute } from './RootRoute';
import { FooterRoute } from './core/footer';
import { HeaderRoute } from './core/header';
import { ImageRoute } from './core/image';
import { ListRoute } from './core/list';
import { MainRoute } from './core/main';
import { NavigationRoute } from './core/navigation';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootRoute,
    children: [
      BoxRoute,
      CardRoute,
      FlexRoute,
      FooterRoute,
      HeaderRoute,
      ImageRoute,
      ListRoute,
      MainRoute,
      NavigationRoute
    ]
  }
]);
