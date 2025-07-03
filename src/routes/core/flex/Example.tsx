import { Flex } from '../../../core/components/Flex/Flex';
import type { FlexProps } from '../../../core/components/Flex/Flex.types';

export const Example = ({
  children = 'FLEX',
  ...restProps
}: FlexProps<'div'>) => <Flex {...restProps}>{children}</Flex>;
