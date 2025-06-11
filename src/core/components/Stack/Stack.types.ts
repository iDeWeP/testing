import type { ElementType } from 'react';
import type { BoxProps } from '../Box/Box.types';
import type { FlexConfigProps } from '../Flex/Flex.types';

export type StackConfigProps = FlexConfigProps;

export type StackProps<E extends ElementType> = BoxProps<E> & StackConfigProps;
