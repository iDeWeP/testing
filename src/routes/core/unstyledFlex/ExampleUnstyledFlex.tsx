import { UnstyledFlex } from '../../../core/components/UnstyledFlex/UnstyledFlex';
import type { UnstyledFlexProps } from '../../../core/components/UnstyledFlex/UnstyledFlex.types';

export const ExampleUnstyledFlex = ({
  children = 'UNSTYLED-FLEX',
  ...restProps
}: UnstyledFlexProps<'div'>) => (
  <UnstyledFlex
    variant="none"
    {...restProps}
  >
    {children}
  </UnstyledFlex>
);
