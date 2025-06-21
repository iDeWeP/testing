import type { CardConfigProps } from '../../components/Card/Card.types';
import type { FlexConfigProps } from '../../components/Flex/Flex.types';
import type { FooterConfigProps } from '../../components/Footer/Footer.types';
import type { HeaderConfigProps } from '../../components/Header/Header.types';
import type { ImageConfigProps } from '../../components/Image/Image.types';
import type { LabelConfigProps } from '../../components/Label/Label.types';
import type { ListConfigProps } from '../../components/List/List.types';
import type { MainConfigProps } from '../../components/Main/Main.types';
import type { MarkConfigProps } from '../../components/Mark/Mark.types';
import type { NavigationConfigProps } from '../../components/Navigation/Navigation.types';
import type { SectionConfigProps } from '../../components/Section/Section.types';
import type { SidebarConfigProps } from '../../components/Sidebar/Sidebar.types';
import type { StackConfigProps } from '../../components/Stack/Stack.types';
import type { TextConfigProps } from '../../components/Text/Text.types';
import type { TitleConfigProps } from '../../components/Title/Title.types';

export type CoreComponentsMap = {
  /* accordion?: ComponentConfig<AccordionProps>;
  alert?: ComponentConfig<AlertProps>;
  anchor?: ComponentConfig<AnchorProps>;
  appShell?: ComponentConfig<AppShellProps>;
  avatar?: ComponentConfig<AvatarProps>;
  avatarGroup?: ComponentConfig<AvatarGroupProps>;
  badge?: ComponentConfig<BadgeProps>; */
  /* breadcrumbs?: ComponentConfig<BreadcrumbsProps>;
  button?: ComponentConfig<ButtonProps>;
  buttonGroup?: ComponentConfig<ButtonGroupProps>; */
  card?: CardConfigProps;
  /* checkbox?: ComponentConfig<CheckboxProps>;
  chip?: ComponentConfig<ChipProps>;
  circularProgress?: ComponentConfig<CircularProgressProps>;
  container?: ComponentConfig<ContainerProps>;
  divider?: ComponentConfig<DividerProps>;
  drawer?: ComponentConfig<DrawerProps>;
  fab?: ComponentConfig<FabProps>; */
  flex?: FlexConfigProps;
  footer?: FooterConfigProps;
  /* formControl?: ComponentConfig<FormControlProps>;
  grid?: ComponentConfig<GridProps>; */
  header?: HeaderConfigProps;
  /* heading?: ComponentConfig<HeadingProps>;
  icon?: ComponentConfig<IconProps>; */
  image?: ImageConfigProps;
  //input?: ComponentConfig<InputProps>;
  label?: LabelConfigProps;
  /* layout?: ComponentConfig<LayoutProps>;
  linearProgress?: ComponentConfig<LinearProgressProps>;
  link?: ComponentConfig<LinkProps>; */
  list?: ListConfigProps;
  //listItem?: ComponentConfig<ListItemProps>;
  main?: MainConfigProps;
  mark?: MarkConfigProps;
  navigation?: NavigationConfigProps;
  // radio?: ComponentConfig<RadioProps>;
  section?: SectionConfigProps;
  sidebar?: SidebarConfigProps;
  /* snackbar?: ComponentConfig<SnackbarProps>;
  spinner?: ComponentConfig<SpinnerProps>; */
  stack?: StackConfigProps;
  //switch?: ComponentConfig<SwitchProps>;
  text?: TextConfigProps;
  //textarea?: ComponentConfig<TextareaProps>;
  title?: TitleConfigProps;
  /* toggleButton?: ComponentConfig<ToggleButtonProps>;
  toggleButtonGroup?: ComponentConfig<ToggleButtonGroupProps>;
  tooltip?: ComponentConfig<TooltipProps>; */
};

/* export type RouterComponents {
  anchor?: ComponentConfig<RouterAnchorProps>;
  link?: ComponentConfig<RouterLinkProps>;
  navlink?: ComponentConfig<RouterNavlinkProps>;
} */

type ComponentConfig<P> = {
  styles?: string;
  props?: P;
};

type ComponentConfigUtil<T> = {
  [K in keyof T]: ComponentConfig<T[K]>;
};

export type CoreComponentsConfig = ComponentConfigUtil<CoreComponentsMap>;

export type ComponentConfigContext = {
  core?: CoreComponentsConfig;
  // router?: RouterComponents;
};
