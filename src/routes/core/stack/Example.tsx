import type { ReactNode } from 'react';
import { Stack } from '../../../core/components/Stack/Stack';
import type { StackProps } from '../../../core/components/Stack/Stack.types';

export const Example = ({
  children = 'STACK',
  ...restProps
}: StackProps<'div'>): ReactNode => <Stack {...restProps}>{children}</Stack>;
