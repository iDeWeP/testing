import type { ElementType } from 'react';
import type { BoxProps } from '../Box/Box.types';
import type { FlexConfigProps } from '../Flex/Flex.types';

export type SidebarConfigProps = FlexConfigProps;

export type SidebarProps<E extends ElementType> = BoxProps<E> & SidebarConfigProps;
