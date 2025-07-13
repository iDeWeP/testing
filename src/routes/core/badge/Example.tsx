import { Badge } from '../../../core/components/Badge/Badge';
import type { BadgeProps } from '../../../core/components/Badge/Badge.types';

export const Example = ({
  children = 'BADGE',
  ...restProps
}: BadgeProps<'div'>) => <Badge {...restProps}>{children}</Badge>;
