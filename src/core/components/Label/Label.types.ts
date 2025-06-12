import type { ElementType } from 'react';
import type { FlexConfigProps, FlexProps } from '../Flex/Flex.types';

export type LabelConfigProps = FlexConfigProps;

export type LabelProps<E extends ElementType> = FlexProps<E>;
