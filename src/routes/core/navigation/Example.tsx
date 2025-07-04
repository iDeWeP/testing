import { Navigation } from '../../../core/components/Navigation/Navigation';
import type { NavigationProps } from '../../../core/components/Navigation/Navigation.types';

export const Example = ({
  children = 'NAVIGATION',
  ...restProps
}: NavigationProps<'div'>) => (
  <Navigation {...restProps}>{children}</Navigation>
);
