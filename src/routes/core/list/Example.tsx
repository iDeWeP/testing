import { List } from '../../../core/components/List/List';
import type { ListProps } from '../../../core/components/List/List.types';

export const Example = ({
  children = 'LIST',
  ...restProps
}: ListProps<'ul'>) => <List {...restProps}>{children}</List>;
