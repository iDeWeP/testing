import { UnstyledGrid } from '../../../core/components/UnstyledGrid/UnstyledGrid';
import type { UnstyledGridProps } from '../../../core/components/UnstyledGrid/UnstyledGrid.types';

type Props = {
  light?: boolean;
} & UnstyledGridProps<'div'>;

export const ExampleUnstyledGrid = ({
  light,
  children = 'UNSTYLED-GRID',
  ...restProps
}: Props) => (
  <UnstyledGrid
    variant={light ? 'light' : 'none'}
    color="primary"
    {...restProps}
  >
    {children}
  </UnstyledGrid>
);
