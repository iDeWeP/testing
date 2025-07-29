import type { ReactNode } from 'react';
import { Box } from '../core/components/Box/Box';
import type { BoxProps } from '../core/components/Box/Box.types';

export const ExampleBox = (props: BoxProps<'div'>): ReactNode => (
  <Box {...props} />
);
