import type { ReactNode } from 'react';
import { UnstyledBadge } from '../../../core/components/UnstyledBadge/UnstyledBadge';
import type { UnstyledBadgeProps } from '../../../core/components/UnstyledBadge/UnstyledBadge.types';

type Props = {
  clear?: boolean;
} & UnstyledBadgeProps<'div'>;

export const Example = ({
  clear,
  children = 'UNSTYLED-BADGE',
  ...restProps
}: Props): ReactNode => (
  <UnstyledBadge
    color={clear ? 'unset' : 'primary'}
    {...restProps}
  >
    {children}
  </UnstyledBadge>
);
