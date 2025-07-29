import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledListItem } from '../UnstyledListItem/UnstyledListItem';
import type { ListItemProps } from './ListItem.types';
import { listItemConfig } from './listItemConfig';

export const ListItem = <E extends ElementType>(
  props: ListItemProps<E>
): ReactNode => {
  const mergedProps = useMergeProps('listItem', listItemConfig.props, props);

  return <UnstyledListItem {...mergedProps} />;
};
