import type { ElementType } from 'react';
import type { BoxProps } from '../Box/Box.types';
import type { FlexConfigProps } from '../Flex/Flex.types';

export type ListConfigProps = FlexConfigProps;

export type ListProps<E extends ElementType> = BoxProps<E> & ListConfigProps;
