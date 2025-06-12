import type { ElementType } from 'react';
import type { FlexConfigProps, FlexProps } from '../Flex/Flex.types';

export type ListConfigProps = FlexConfigProps;

export type ListProps<E extends ElementType> = FlexProps<E>;
