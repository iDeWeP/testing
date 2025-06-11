import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { Flex } from '../Flex/Flex';
import type { FlexProps } from '../Flex/Flex.types';
import listConfig from './listConfig';

export const List = <E extends ElementType = 'ul'>(props: FlexProps<E>) => {
  const mergedProps = useMergeProps('list', listConfig.props, props);

  return <Flex {...mergedProps} />;
};
