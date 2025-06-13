import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { UnstyledFlexBox } from '../UnstyledFlexBox/UnstyledFlexBox';
import type { ListProps } from './List.types';
import { listConfig } from './listConfig';

export const List = <E extends ElementType = 'ul'>(props: ListProps<E>) => {
  const mergedProps = useMergeProps('list', listConfig.props, props);

  return <UnstyledFlexBox {...mergedProps} />;
};
