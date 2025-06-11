import type { ComponentConfig } from '../../types';
import type { LayoutConfigProps } from './Layout.types';

const layoutConfig: ComponentConfig<LayoutConfigProps> = {
  props: {
    orientation: 'vertical',
    justify: 'normal',
    align: 'stretch',
    gap: 'none',
    variant: 'none',
    scale: 'default',
    spacing: 'none',
    margin: 'none',
    border: false,
    radius: 'none',
    color: 'neutral'
  }
};

export default layoutConfig;
