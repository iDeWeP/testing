import { UnstyledGrid } from '../../../core/components/UnstyledGrid/UnstyledGrid';
import type { UnstyledGridProps } from '../../../core/components/UnstyledGrid/UnstyledGrid.types';

type Props = {
  clear?: boolean;
} & UnstyledGridProps<'div'>;

export const ExampleUnstyledGrid = ({
  clear,
  children = 'UNSTYLED-GRID',
  ...restProps
}: Props) => (
  <UnstyledGrid
    variant={clear ? 'none' : 'light'}
    color="primary"
    {...restProps}
  >
    {children}
  </UnstyledGrid>
);
