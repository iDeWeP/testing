import { Sidebar } from '../../../core/components/Sidebar/Sidebar';
import type { SidebarProps } from '../../../core/components/Sidebar/Sidebar.types';

export const Example = ({
  children = 'SECTION',
  ...restProps
}: SidebarProps<'div'>) => <Sidebar {...restProps}>{children}</Sidebar>;
