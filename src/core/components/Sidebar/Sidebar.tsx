import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { Flex } from '../Flex/Flex';
import type { FlexProps } from '../Flex/Flex.types';
import sidebarConfig from './sidebarConfig';

export const Sidebar = <E extends ElementType = 'aside'>(
  props: FlexProps<E>
) => {
  const mergedProps = useMergeProps('sidebar', sidebarConfig.props, props);

  return <Flex {...mergedProps} />;
};
