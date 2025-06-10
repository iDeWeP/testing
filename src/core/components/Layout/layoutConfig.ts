import type { ComponentConfig } from '../../types';
import type { LayoutConfigProps } from './Layout.types';

const layoutConfig: ComponentConfig<LayoutConfigProps> = {
  props: {
    variant: 'none',
    orientation: 'vertical',
    scale: 'default',
    spacing: 'none',
    margin: 'none',
    border: false,
    radius: 'none',
    color: 'neutral',
    justify: 'normal',
    align: 'stretch',
    gap: 'none'
  }
};

export default layoutConfig;
