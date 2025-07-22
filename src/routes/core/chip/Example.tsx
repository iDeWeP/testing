import type { ReactNode } from 'react';
import { Chip } from '../../../core/components/Chip/Chip';
import type { ChipProps } from '../../../core/components/Chip/Chip.types';

export const Example = ({
  children = 'CHIP',
  ...restProps
}: ChipProps<'div'>): ReactNode => <Chip {...restProps}>{children}</Chip>;
