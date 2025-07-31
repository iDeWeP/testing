import { createBrowserRouter } from 'react-router';
import { AnchorRoute } from './core/anchor';
import { AvatarRoute } from './core/avatar';
import { AvatarGroupRoute } from './core/avatar-group';
import { BadgeRoute } from './core/badge';
import { BoxRoute } from './core/box';
import { ButtonRoute } from './core/button';
import { CardRoute } from './core/card';
import { CardBodyRoute } from './core/card-body';
import { CardFooterRoute } from './core/card-footer';
import { CheckboxRoute } from './core/checkbox';
import { ChipRoute } from './core/chip';
import { CircularProgressRoute } from './core/circular-progress';
import { CloseButtonRoute } from './core/close-button';
import { ContainerRoute } from './core/container';
import { DividerRoute } from './core/divider';
import { DropdownRoute } from './core/dropdown';
import { FabRoute } from './core/fab';
import { FlexRoute } from './core/flex';
import { FooterRoute } from './core/footer';
import { GridRoute } from './core/grid';
import { GroupRoute } from './core/group';
import { HeaderRoute } from './core/header';
import { IconRoute } from './core/icon';
import { IconButtonRoute } from './core/icon-button';
import { ImageRoute } from './core/image';
import { InputRoute } from './core/input';
import { LabelRoute } from './core/label';
import { LinearProgressRoute } from './core/linear-progress';
import { LinkRoute } from './core/link';
import { ListRoute } from './core/list';
import { ListItemRoute } from './core/list-item';
import { MainRoute } from './core/main';
import { MarkRoute } from './core/mark';
import { NavigationRoute } from './core/navigation';
import { PaperRoute } from './core/paper';
import { RadioRoute } from './core/radio';
import { SectionRoute } from './core/section';
import { SidebarRoute } from './core/sidebar';
import { SpinnerRoute } from './core/spinner';
import { StackRoute } from './core/stack';
import { SwitchRoute } from './core/switch';
import { TextRoute } from './core/text';
import { TextareaRoute } from './core/textarea';
import { TitleRoute } from './core/title';
import { ToggleButtonRoute } from './core/toggle-button';
import { TransitionRoute } from './core/transition';
import { UnstyledAvatarRoute } from './core/unstyled-avatar';
import { UnstyledAvatarGroupRoute } from './core/unstyled-avatar-group';
import { UnstyledBadgeRoute } from './core/unstyled-badge';
import { UnstyledBoxRoute } from './core/unstyled-box';
import { UnstyledButtonRoute } from './core/unstyled-button';
import { UnstyledCardRoute } from './core/unstyled-card';
import { UnstyledCardBodyRoute } from './core/unstyled-card-body';
import { UnstyledCheckboxRoute } from './core/unstyled-checkbox';
import { UnstyledCircularProgressRoute } from './core/unstyled-circular-progress';
import { UnstyledCloseButtonRoute } from './core/unstyled-close-button';
import { UnstyledContainerRoute } from './core/unstyled-container';
import { UnstyledDividerRoute } from './core/unstyled-divider';
import { UnstyledDropdownRoute } from './core/unstyled-dropdown';
import { UnstyledGroupRoute } from './core/unstyled-group';
import { UnstyledInputRoute } from './core/unstyled-input';
import { UnstyledLabelRoute } from './core/unstyled-label';
import { UnstyledLinearProgressRoute } from './core/unstyled-linear-progress';
import { UnstyledListItemRoute } from './core/unstyled-list-item';
import { UnstyledLoaderRoute } from './core/unstyled-loader';
import { UnstyledPaperRoute } from './core/unstyled-paper';
import { UnstyledSpinnerRoute } from './core/unstyled-spinner';
import { UnstyledSwitchRoute } from './core/unstyled-switch';
import { UnstyledToggleButtonRoute } from './core/unstyled-toggle-button';
import { UnstyledTypographyRoute } from './core/unstyled-typography';
import { RootRoute } from './RootRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootRoute,
    children: [
      AnchorRoute,
      AvatarRoute,
      AvatarGroupRoute,
      BadgeRoute,
      BoxRoute,
      ButtonRoute,
      CardRoute,
      CardBodyRoute,
      CardFooterRoute,
      CheckboxRoute,
      ChipRoute,
      CircularProgressRoute,
      CloseButtonRoute,
      ContainerRoute,
      DividerRoute,
      DropdownRoute,
      FabRoute,
      FlexRoute,
      FooterRoute,
      GridRoute,
      GroupRoute,
      HeaderRoute,
      IconRoute,
      IconButtonRoute,
      ImageRoute,
      InputRoute,
      LabelRoute,
      LinearProgressRoute,
      LinkRoute,
      ListRoute,
      ListItemRoute,
      MainRoute,
      MarkRoute,
      NavigationRoute,
      PaperRoute,
      RadioRoute,
      SectionRoute,
      SidebarRoute,
      SpinnerRoute,
      StackRoute,
      SwitchRoute,
      TextRoute,
      TextareaRoute,
      TitleRoute,
      ToggleButtonRoute,
      TransitionRoute,
      UnstyledAvatarRoute,
      UnstyledAvatarGroupRoute,
      UnstyledBadgeRoute,
      UnstyledBoxRoute,
      UnstyledButtonRoute,
      UnstyledCardRoute,
      UnstyledCardBodyRoute,
      UnstyledCheckboxRoute,
      UnstyledCircularProgressRoute,
      UnstyledCloseButtonRoute,
      UnstyledContainerRoute,
      UnstyledDividerRoute,
      UnstyledDropdownRoute,
      UnstyledGroupRoute,
      UnstyledInputRoute,
      UnstyledLabelRoute,
      UnstyledLinearProgressRoute,
      UnstyledListItemRoute,
      UnstyledLoaderRoute,
      UnstyledPaperRoute,
      UnstyledSpinnerRoute,
      UnstyledSwitchRoute,
      UnstyledToggleButtonRoute,
      UnstyledTypographyRoute
    ]
  }
]);
