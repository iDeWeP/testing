import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledList } from '../UnstyledList/UnstyledList';
import type { SidebarProps } from './Sidebar.types';
import { sidebarConfig } from './sidebarConfig';

export const Sidebar = <E extends ElementType>(props: SidebarProps<E>) => {
  const mergedProps = useMergeProps('sidebar', sidebarConfig.props, props);

  return <UnstyledList {...mergedProps} />;
};
