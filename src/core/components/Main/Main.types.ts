import type { ElementType } from 'react';
import type { BoxProps } from '../Box/Box.types';
import type { FlexConfigProps } from '../Flex/Flex.types';

export type MainConfigProps = FlexConfigProps;

export type MainProps<E extends ElementType> = BoxProps<E> & MainConfigProps;
