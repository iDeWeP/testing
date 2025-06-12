import type { ElementType } from 'react';
import type { FlexConfigProps, FlexProps } from '../Flex/Flex.types';

export type CardConfigProps = FlexConfigProps;

export type CardProps<E extends ElementType> = FlexProps<E>;
