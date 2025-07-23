import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledPaper } from '../UnstyledPaper/UnstyledPaper';
import type { SidebarProps } from './Sidebar.types';
import { sidebarConfig } from './sidebarConfig';

export const Sidebar = <E extends ElementType>(
  props: SidebarProps<E>
): ReactNode => {
  const mergedProps = useMergeProps('sidebar', sidebarConfig.props, props);

  return <UnstyledPaper {...mergedProps} />;
};
