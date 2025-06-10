/* import { type AccordionProps } from '../../components/Accordion/Accordion.types';
import { type AlertProps } from '../../components/Alert/Alert.types';
import { type AnchorProps } from '../../components/Anchor/Anchor.types';
import { type AppShellProps } from '../../components/AppShell/AppShell.types';
import { type AvatarProps } from '../../components/Avatar/Avatar.types';
import { type AvatarGroupProps } from '../../components/AvatarGroup/AvatarGroup.types';
import { type BadgeProps } from '../../components/Badge/Badge.types'; */
import { type BoxProps } from '../../components/Box/Box.types';
/* import { type BreadcrumbsProps } from '../../components/Breadcrumbs/Breadcrumbs.types';
import { type ButtonProps } from '../../components/Button/Button.types';
import { type ButtonGroupProps } from '../../components/ButtonGroup/ButtonGroup.types';
import { type CardProps } from '../../components/Card/Card.types';
import { type CheckboxProps } from '../../components/Checkbox/Checkbox.types';
import { type ChipProps } from '../../components/Chip/Chip.types';
import { type CircularProgressProps } from '../../components/CircularProgress/CircularProgress.types';
import { type ContainerProps } from '../../components/Container/Container.types';
import { type DividerProps } from '../../components/Divider/Divider.types';
import { type DrawerProps } from '../../components/Drawer/Drawer.types';
import { type FabProps } from '../../components/Fab/Fab.types';
import { type FlexProps } from '../../components/Flex/Flex.types';
import { type FooterProps } from '../../components/Footer/Footer.types';
import { type FormControlProps } from '../../components/FormControl/FormControl.types';
import { type GridProps } from '../../components/Grid/Grid.types';
import { type HeaderProps } from '../../components/Header/Header.types';
import { type HeadingProps } from '../../components/Heading/Heading.types';
import { type IconProps } from '../../components/Icon/Icon.types';
import { type ImageProps } from '../../components/Image/Image.types';
import { type InputProps } from '../../components/Input/Input.types';
import { type LabelProps } from '../../components/Label/Label.types';
import { type LayoutProps } from '../../components/Layout/Layout.types';
import { type LinearProgressProps } from '../../components/LinearProgress/LinearProgress.types';
import { type LinkProps } from '../../components/Link/Link.types';
import { type ListProps } from '../../components/List/List.types';
import { type ListItemProps } from '../../components/ListItem/ListItem.types';
import { type MainProps } from '../../components/Main/Main.types';
import { type MarkProps } from '../../components/Mark/Mark.types';
import { type NavigationProps } from '../../components/Navigation/Navigation.types';
import { type RadioProps } from '../../components/Radio/Radio.types';
import { type SectionProps } from '../../components/Section/Section.types';
import { type SidebarProps } from '../../components/Sidebar/Sidebar.types';
import { type SnackbarProps } from '../../components/Snackbar/Snackbar.types';
import { type SpinnerProps } from '../../components/Spinner/Spinner.types';
import { type StackProps } from '../../components/Stack/Stack.types';
import { type SwitchProps } from '../../components/Switch/Switch.types';
import { type TextProps } from '../../components/Text/Text.types';
import { type TextareaProps } from '../../components/Textarea/Textarea.types';
import { type ToggleButtonProps } from '../../components/ToggleButton/ToggleButton.types';
import { type ToggleButtonGroupProps } from '../../components/ToggleButtonGroup/ToggleButtonGroup.types';
import { type TooltipProps } from '../../components/Tooltip/Tooltip.types';

import { type AnchorProps as RouterAnchorProps } from '../../../router/components/Anchor/Anchor.types';
import { type LinkProps as RouterLinkProps } from '../../../router/components/Link/Link.types';
import { type NavlinkProps as RouterNavlinkProps } from '../../../router/components/Navlink/Navlink.types'; */

export interface CoreComponentsMap {
  /* accordion?: ComponentConfig<AccordionProps>;
  alert?: ComponentConfig<AlertProps>;
  anchor?: ComponentConfig<AnchorProps>;
  appShell?: ComponentConfig<AppShellProps>;
  avatar?: ComponentConfig<AvatarProps>;
  avatarGroup?: ComponentConfig<AvatarGroupProps>;
  badge?: ComponentConfig<BadgeProps>; */
  box?: BoxProps;
  /* breadcrumbs?: ComponentConfig<BreadcrumbsProps>;
  button?: ComponentConfig<ButtonProps>;
  buttonGroup?: ComponentConfig<ButtonGroupProps>;
  card?: ComponentConfig<CardProps>;
  checkbox?: ComponentConfig<CheckboxProps>;
  chip?: ComponentConfig<ChipProps>;
  circularProgress?: ComponentConfig<CircularProgressProps>;
  container?: ComponentConfig<ContainerProps>;
  divider?: ComponentConfig<DividerProps>;
  drawer?: ComponentConfig<DrawerProps>;
  fab?: ComponentConfig<FabProps>;
  flex?: ComponentConfig<FlexProps>;
  footer?: ComponentConfig<FooterProps>;
  formControl?: ComponentConfig<FormControlProps>;
  grid?: ComponentConfig<GridProps>;
  header?: ComponentConfig<HeaderProps>;
  heading?: ComponentConfig<HeadingProps>;
  icon?: ComponentConfig<IconProps>;
  image?: ComponentConfig<ImageProps>;
  input?: ComponentConfig<InputProps>;
  label?: ComponentConfig<LabelProps>;
  layout?: ComponentConfig<LayoutProps>;
  linearProgress?: ComponentConfig<LinearProgressProps>;
  link?: ComponentConfig<LinkProps>;
  list?: ComponentConfig<ListProps>;
  listItem?: ComponentConfig<ListItemProps>;
  main?: ComponentConfig<MainProps>;
  mark?: ComponentConfig<MarkProps>;
  navigation?: ComponentConfig<NavigationProps>;
  radio?: ComponentConfig<RadioProps>;
  section?: ComponentConfig<SectionProps>;
  sidebar?: ComponentConfig<SidebarProps>;
  snackbar?: ComponentConfig<SnackbarProps>;
  spinner?: ComponentConfig<SpinnerProps>;
  stack?: ComponentConfig<StackProps>;
  switch?: ComponentConfig<SwitchProps>;
  text?: ComponentConfig<TextProps>;
  textarea?: ComponentConfig<TextareaProps>;
  toggleButton?: ComponentConfig<ToggleButtonProps>;
  toggleButtonGroup?: ComponentConfig<ToggleButtonGroupProps>;
  tooltip?: ComponentConfig<TooltipProps>; */
}

/* export interface RouterComponents {
  anchor?: ComponentConfig<RouterAnchorProps>;
  link?: ComponentConfig<RouterLinkProps>;
  navlink?: ComponentConfig<RouterNavlinkProps>;
} */

interface ComponentConfig<T> {
  styles?: string;
  props?: Partial<T>;
}

type ComponentConfigUtil<T> = {
  [P in keyof T]: ComponentConfig<T[P]>;
};

export interface Config {
  core?: ComponentConfigUtil<CoreComponentsMap>;
  // router?: RouterComponents;
}
