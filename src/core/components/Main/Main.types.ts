import type { ElementType } from 'react';
import type { FlexConfigProps, FlexProps } from '../Flex/Flex.types';

export type MainConfigProps = FlexConfigProps;

export type MainProps<E extends ElementType> = FlexProps<E>;
