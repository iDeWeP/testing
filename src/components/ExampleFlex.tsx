import { Flex } from '../core/components/Flex/Flex';
import type { FlexProps } from '../core/components/Flex/Flex.types';

export const ExampleFlex = ({ ...restProps }: FlexProps<'div'>) => (
  <Flex
    className="justify-evenly"
    {...restProps}
  />
);
