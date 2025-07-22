import type { ReactNode } from 'react';
import { Flex } from '../../../core/components/Flex/Flex';
import type { FlexProps } from '../../../core/components/Flex/Flex.types';

export const Example = ({
  children = 'FLEX',
  ...restProps
}: FlexProps<'div'>): ReactNode => <Flex {...restProps}>{children}</Flex>;
