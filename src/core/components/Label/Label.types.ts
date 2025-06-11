import type { ElementType } from 'react';
import type { BoxProps } from '../Box/Box.types';
import type { FlexConfigProps } from '../Flex/Flex.types';

export type LabelConfigProps = FlexConfigProps;

export type LabelProps<E extends ElementType> = BoxProps<E> & LabelConfigProps;
