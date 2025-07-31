import type { ReactNode } from 'react';
import { Paper } from '../../../core/components/Paper/Paper';
import type { PaperProps } from '../../../core/components/Paper/Paper.types';

export const Example = ({
  children = 'PAPER',
  ...restProps
}: PaperProps<'div'>): ReactNode => <Paper {...restProps}>{children}</Paper>;
