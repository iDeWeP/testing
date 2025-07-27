import type { ReactNode } from 'react';
import { ExampleAnchor } from '../../../components/ExampleAnchor';
import { UnstyledBadge } from '../../../core/components/UnstyledBadge/UnstyledBadge';
import type { UnstyledBadgeProps } from '../../../core/components/UnstyledBadge/UnstyledBadge.types';

type Props = {
  clear?: boolean;
} & UnstyledBadgeProps<'div'>;

export const Example = ({
  clear,
  overlap,
  children = 'UNSTYLED-BADGE',
  ...restProps
}: Props): ReactNode => (
  <ExampleAnchor
    radius={
      overlap === 'square' ? 'unset' : overlap === 'rounded' ? 'lg' : 'full'
    }
  >
    <UnstyledBadge
      color={clear ? 'unset' : 'primary'}
      overlap={overlap}
      {...restProps}
    >
      {children}
    </UnstyledBadge>
    {children}
  </ExampleAnchor>
);
