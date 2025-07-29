import type { ReactNode } from 'react';
import { Flex } from '../core/components/Flex/Flex';
import type { FlexProps } from '../core/components/Flex/Flex.types';

export const ExampleFlex = ({
  className,
  ...restProps
}: FlexProps<'div'>): ReactNode => (
  <Flex
    className={`justify-evenly ${className}`}
    {...restProps}
  />
);
