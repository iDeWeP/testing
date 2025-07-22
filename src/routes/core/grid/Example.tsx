import type { ReactNode } from 'react';
import { Grid } from '../../../core/components/Grid/Grid';
import type { GridProps } from '../../../core/components/Grid/Grid.types';

type Props = {
  col?: boolean;
} & GridProps<'div'>;

export const Example = ({
  col,
  children = 'GRID',
  ...restProps
}: Props): ReactNode => (
  <Grid
    className={`${col ? 'grid-flow-col' : ''}`}
    {...restProps}
  >
    {children}
  </Grid>
);
