import type { ElementType } from 'react';
import type { BoxProps } from '../Box/Box.types';
import type { FlexConfigProps } from '../Flex/Flex.types';

export type SectionConfigProps = FlexConfigProps;

export type SectionProps<E extends ElementType> = BoxProps<E> &
  SectionConfigProps;
