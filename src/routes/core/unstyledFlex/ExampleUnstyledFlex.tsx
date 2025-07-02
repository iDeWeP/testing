import { UnstyledFlex } from '../../../core/components/UnstyledFlex/UnstyledFlex';
import type { UnstyledFlexProps } from '../../../core/components/UnstyledFlex/UnstyledFlex.types';

type Props = {
  clear?: boolean;
} & UnstyledFlexProps<'div'>;

export const ExampleUnstyledFlex = ({
  clear,
  children = 'UNSTYLED-FLEX',
  ...restProps
}: Props) => (
  <UnstyledFlex
    variant={clear ? 'none' : 'light'}
    color="primary"
    {...restProps}
  >
    {children}
  </UnstyledFlex>
);
