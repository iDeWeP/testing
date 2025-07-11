import type { AnchorConfigProps } from '../../components/Anchor/Anchor.types';
import type { CardConfigProps } from '../../components/Card/Card.types';
import type { FlexConfigProps } from '../../components/Flex/Flex.types';
import type { FooterConfigProps } from '../../components/Footer/Footer.types';
import type { GridConfigProps } from '../../components/Grid/Grid.types';
import type { HeaderConfigProps } from '../../components/Header/Header.types';
import type { ImageConfigProps } from '../../components/Image/Image.types';
import type { ListConfigProps } from '../../components/List/List.types';
import type { ListItemConfigProps } from '../../components/ListItem/ListItem.types';
import type { MainConfigProps } from '../../components/Main/Main.types';
import type { MarkConfigProps } from '../../components/Mark/Mark.types';
import type { NavigationConfigProps } from '../../components/Navigation/Navigation.types';
import type { SectionConfigProps } from '../../components/Section/Section.types';
import type { SidebarConfigProps } from '../../components/Sidebar/Sidebar.types';
import type { StackConfigProps } from '../../components/Stack/Stack.types';
import type { TextConfigProps } from '../../components/Text/Text.types';
import type { TitleConfigProps } from '../../components/Title/Title.types';

export type CoreComponentsMap = {
  anchor?: AnchorConfigProps;
  card?: CardConfigProps;
  flex?: FlexConfigProps;
  footer?: FooterConfigProps;
  grid?: GridConfigProps;
  header?: HeaderConfigProps;
  image?: ImageConfigProps;
  list?: ListConfigProps;
  listItem?: ListItemConfigProps;
  main?: MainConfigProps;
  mark?: MarkConfigProps;
  navigation?: NavigationConfigProps;
  section?: SectionConfigProps;
  sidebar?: SidebarConfigProps;
  text?: TextConfigProps;
  title?: TitleConfigProps;
  stack?: StackConfigProps;
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
