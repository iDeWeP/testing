import type { ComponentConfig } from '../../types';
import type { SidebarConfigProps } from './Sidebar.types';

export const sidebarConfig: ComponentConfig<SidebarConfigProps> = {
  props: {
    as: 'aside',
    direction: 'col',
    wrap: 'wrap',
    justify: 'normal',
    align: 'stretch',
    gap: 'none',
    variant: 'none',
    size: 'none',
    scale: 'square',
    margin: 'none',
    border: 'none',
    radius: 'none',
    color: 'neutral'
  }
};
