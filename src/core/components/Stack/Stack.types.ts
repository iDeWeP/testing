import type { ElementType } from 'react';
import type { FlexConfigProps, FlexProps } from '../Flex/Flex.types';

export type StackConfigProps = FlexConfigProps;

export type StackProps<E extends ElementType> = FlexProps<E>;
