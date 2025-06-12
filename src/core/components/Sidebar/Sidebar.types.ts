import type { ElementType } from 'react';
import type { FlexConfigProps, FlexProps } from '../Flex/Flex.types';

export type SidebarConfigProps = FlexConfigProps;

export type SidebarProps<E extends ElementType> = FlexProps<E>;
