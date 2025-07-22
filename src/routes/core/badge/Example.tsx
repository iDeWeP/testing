import type { ReactNode } from 'react';
import { ExampleAnchor } from '../../../components/ExampleAnchor';
import { Badge } from '../../../core/components/Badge/Badge';
import type { BadgeProps } from '../../../core/components/Badge/Badge.types';

export const Example = ({
  overlap,
  children = 'BADGE',
  ...restProps
}: BadgeProps<'div'>): ReactNode => (
  <ExampleAnchor
    radius={
      overlap === 'square' ? 'unset' : overlap === 'rounded' ? 'lg' : 'full'
    }
  >
    <Badge
      overlap={overlap}
      {...restProps}
    >
      {children}
    </Badge>
    {children}
  </ExampleAnchor>
);
