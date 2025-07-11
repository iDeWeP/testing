import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledCard } from '../UnstyledCard/UnstyledCard';
import type { ListItemProps } from './ListItem.types';
import { listItemConfig } from './listItemConfig';

export const ListItem = <E extends ElementType>(props: ListItemProps<E>) => {
  const mergedProps = useMergeProps('listItem', listItemConfig.props, props);

  return <UnstyledCard {...mergedProps} />;
};
