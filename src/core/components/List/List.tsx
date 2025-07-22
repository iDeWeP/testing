import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledCard } from '../UnstyledCard/UnstyledCard';
import type { ListProps } from './List.types';
import { listConfig } from './listConfig';

export const List = <E extends ElementType>(props: ListProps<E>): ReactNode => {
  const mergedProps = useMergeProps('list', listConfig.props, props);

  return <UnstyledCard {...mergedProps} />;
};
