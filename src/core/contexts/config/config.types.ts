import type { BoxConfigProps } from '../../components/Box/Box.types';
import type { FlexConfigProps } from '../../components/Flex/Flex.types';

export type CoreComponentsMap = {
  /* accordion?: ComponentConfig<AccordionProps>;
  alert?: ComponentConfig<AlertProps>;
  anchor?: ComponentConfig<AnchorProps>;
  appShell?: ComponentConfig<AppShellProps>;
  avatar?: ComponentConfig<AvatarProps>;
  avatarGroup?: ComponentConfig<AvatarGroupProps>;
  badge?: ComponentConfig<BadgeProps>; */
  box?: BoxConfigProps;
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
  fab?: ComponentConfig<FabProps>; */
  flex?: FlexConfigProps;
  /* formControl?: ComponentConfig<FormControlProps>;
  grid?: ComponentConfig<GridProps>;
  header?: ComponentConfig<HeaderProps>;
  heading?: ComponentConfig<HeadingProps>;
  icon?: ComponentConfig<IconProps>; */
  // image?: ImageCoProps;
  /* input?: ComponentConfig<InputProps>;
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
  spinner?: ComponentConfig<SpinnerProps>; */
  // stack?: StackConfigProps;
  /* switch?: ComponentConfig<SwitchProps>;
  text?: ComponentConfig<TextProps>;
  textarea?: ComponentConfig<TextareaProps>;
  toggleButton?: ComponentConfig<ToggleButtonProps>;
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
