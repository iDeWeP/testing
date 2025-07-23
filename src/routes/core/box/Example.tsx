import type { ReactNode } from 'react';
import { Box } from '../../../core/components/Box/Box';
import type { BoxProps } from '../../../core/components/Box/Box.types';

export const Example = ({
  children = 'BOX',
  ...restProps
}: BoxProps<'div'>): ReactNode => <Box {...restProps}>{children}</Box>;
