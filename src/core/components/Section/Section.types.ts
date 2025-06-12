import type { ElementType } from 'react';
import type { FlexConfigProps, FlexProps } from '../Flex/Flex.types';

export type SectionConfigProps = FlexConfigProps;

export type SectionProps<E extends ElementType> = FlexProps<E>;
