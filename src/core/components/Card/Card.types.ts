import type { ElementType } from 'react';
import type { BoxProps } from '../Box/Box.types';
import type { FlexConfigProps } from '../Flex/Flex.types';

export type CardConfigProps = FlexConfigProps;

export type CardProps<E extends ElementType> = BoxProps<E> & CardConfigProps;
