import { Grid } from '../../../core/components/Grid/Grid';
import type { GridProps } from '../../../core/components/Grid/Grid.types';

export const Example = ({
  children = 'GRID',
  ...restProps
}: GridProps<'div'>) => <Grid {...restProps}>{children}</Grid>;
