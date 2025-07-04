import { Sidebar } from '../../../core/components/Sidebar/Sidebar';
import type { SidebarProps } from '../../../core/components/Sidebar/Sidebar.types';

export const Example = ({
  children = 'SIDEBAR',
  ...restProps
}: SidebarProps<'aside'>) => <Sidebar {...restProps}>{children}</Sidebar>;
