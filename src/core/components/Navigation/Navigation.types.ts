import type { ElementType } from 'react';
import type { FlexConfigProps, FlexProps } from '../Flex/Flex.types';

export type NavigationConfigProps = FlexConfigProps;

export type NavigationProps<E extends ElementType> = FlexProps<E>;
