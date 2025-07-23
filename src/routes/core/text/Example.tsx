import type { ReactNode } from 'react';
import { Text } from '../../../core/components/Text/Text';
import type { TextProps } from '../../../core/components/Text/Text.types';

export const Example = ({
  children = 'TEXT',
  ...restProps
}: TextProps<'p'>): ReactNode => <Text {...restProps}>{children}</Text>;
