import { UnstyledFlex } from '../../../core/components/UnstyledFlex/UnstyledFlex';
import type { UnstyledFlexProps } from '../../../core/components/UnstyledFlex/UnstyledFlex.types';

type Props = {
  light?: boolean;
} & UnstyledFlexProps<'div'>;

export const ExampleUnstyledFlex = ({
  light,
  children = 'UNSTYLED-FLEX',
  ...restProps
}: Props) => (
  <UnstyledFlex
    variant={light ? 'light' : 'none'}
    color="primary"
    {...restProps}
  >
    {children}
  </UnstyledFlex>
);
