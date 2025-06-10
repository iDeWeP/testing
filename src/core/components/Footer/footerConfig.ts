import type { ComponentConfig } from '../../types';
import type { FooterConfigProps } from './Footer.types';

const footerConfig: ComponentConfig<FooterConfigProps> = {
  props: {
    variant: 'none',
    orientation: 'horizontal',
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

export default footerConfig;
