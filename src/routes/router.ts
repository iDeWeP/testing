import { createBrowserRouter } from 'react-router';
import { FlexRoute } from './core/flex';
import { GridRoute } from './core/grid';
import { StackRoute } from './core/stack';
import { TextRoute } from './core/text';
import { TransitionRoute } from './core/transition';
import { UnstyledBoxRoute } from './core/unstyledBox';
import { RootRoute } from './RootRoute';
import { FooterRoute } from './core/footer';
import { HeaderRoute } from './core/header';
import { MainRoute } from './core/main';
import { SectionRoute } from './core/section';
import { SidebarRoute } from './core/sidebar';
import { NavigationRoute } from './core/navigation';
import { ListRoute } from './core/list';
import { TitleRoute } from './core/title';
import { ListItemRoute } from './core/listItem';
import { ImageRoute } from './core/image';
import { AnchorRoute } from './core/anchor';
import { CardRoute } from './core/card';
import { MarkRoute } from './core/mark';
import { UnstyledCheckboxRoute } from './core/unstyledCheckbox';
import { UnstyledInputRoute } from './core/unstyledInput';
import { UnstyledSpinnerRoute } from './core/unstyledSpinner';
import { UnstyledCardRoute } from './core/unstyledCard';
import { UnstyledContainerRoute } from './core/unstyledContainer';
import { UnstyledDropdownRoute } from './core/unstyledDropdown';
import { UnstyledPopperRoute } from './core/unstyledPopper';
import { UnstyledButtonRoute } from './core/unstyledButton';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootRoute,
    children: [
      AnchorRoute,
      CardRoute,
      FlexRoute,
      FooterRoute,
      GridRoute,
      HeaderRoute,
      ImageRoute,
      ListRoute,
      ListItemRoute,
      MainRoute,
      MarkRoute,
      NavigationRoute,
      SectionRoute,
      SidebarRoute,
      StackRoute,
      TextRoute,
      TitleRoute,
      UnstyledBoxRoute,
      UnstyledCheckboxRoute,
      UnstyledInputRoute,
      TransitionRoute,
      UnstyledSpinnerRoute,
      UnstyledCardRoute,
      UnstyledContainerRoute,
      UnstyledDropdownRoute,
      UnstyledPopperRoute,
      UnstyledButtonRoute
    ]
  }
]);
