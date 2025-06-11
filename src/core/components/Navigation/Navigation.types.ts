import type { ElementType } from 'react';
import type { BoxProps } from '../Box/Box.types';
import type { FlexConfigProps } from '../Flex/Flex.types';

export type NavigationConfigProps = FlexConfigProps;

export type NavigationProps<E extends ElementType> = BoxProps<E> & NavigationConfigProps;
