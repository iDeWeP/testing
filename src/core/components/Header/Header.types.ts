import type { ElementType } from 'react';
import type { BoxProps } from '../Box/Box.types';
import type { FlexConfigProps } from '../Flex/Flex.types';

export type HeaderConfigProps = FlexConfigProps;

export type HeaderProps<E extends ElementType> = BoxProps<E> & HeaderConfigProps;
