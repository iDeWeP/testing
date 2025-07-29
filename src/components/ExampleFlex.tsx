import type { ReactNode } from 'react';
import { Flex } from '../core/components/Flex/Flex';
import type { FlexProps } from '../core/components/Flex/Flex.types';

export const ExampleFlex = (props: FlexProps<'div'>): ReactNode => (
  <Flex
    className="justify-evenly"
    {...props}
  />
);
