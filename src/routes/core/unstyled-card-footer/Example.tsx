import type { ReactNode } from 'react';
import { UnstyledCardFooter } from '../../../core/components/UnstyledCardFooter/UnstyledCardFooter';
import type { UnstyledCardFooterProps } from '../../../core/components/UnstyledCardFooter/UnstyledCardFooter.types';

type Props = {
  clear?: boolean;
} & UnstyledCardFooterProps<'div'>;

export const Example = ({
  clear,
  children = 'UNSTYLED-CARD-FOOTER',
  ...restProps
}: Props): ReactNode => (
  <UnstyledCardFooter
    color={clear ? 'unset' : 'primary'}
    {...restProps}
  >
    {children}
  </UnstyledCardFooter>
);
