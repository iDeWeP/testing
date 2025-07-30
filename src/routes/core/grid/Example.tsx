import type { ReactNode } from 'react';
import { Grid } from '../../../core/components/Grid/Grid';
import type { GridProps } from '../../../core/components/Grid/Grid.types';

export const Example = ({
  children = 'GRID',
  ...restProps
}: GridProps<'div'>): ReactNode => <Grid {...restProps}>{children}</Grid>;
