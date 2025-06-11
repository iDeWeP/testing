import type { ElementType } from 'react';
import type { BoxProps } from '../Box/Box.types';
import type { FlexConfigProps } from '../Flex/Flex.types';

export type FooterConfigProps = FlexConfigProps;

export type FooterProps<E extends ElementType> = BoxProps<E> & FooterConfigProps;
