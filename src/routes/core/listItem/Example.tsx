import { ListItem } from '../../../core/components/ListItem/ListItem';
import type { ListItemProps } from '../../../core/components/ListItem/ListItem.types';

export const Example = ({
  children = 'LIST-ITEM',
  ...restProps
}: ListItemProps<'li'>) => <ListItem {...restProps}>{children}</ListItem>;
