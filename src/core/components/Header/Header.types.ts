import type { ElementType } from 'react';
import type { FlexConfigProps, FlexProps } from '../Flex/Flex.types';

export type HeaderConfigProps = FlexConfigProps;

export type HeaderProps<E extends ElementType> = FlexProps<E>;
