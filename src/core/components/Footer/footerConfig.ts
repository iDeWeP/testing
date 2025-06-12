import type { ComponentConfig } from '../../types';
import type { FooterConfigProps } from './Footer.types';

const footerConfig: ComponentConfig<FooterConfigProps> = {
  props: {
    direction: 'row',
    wrap: 'wrap',
    justify: 'normal',
    align: 'stretch',
    gap: 'none',
    variant: 'none',
    scale: 'square',
    spacing: 'none',
    margin: 'none',
    border: 'none',
    radius: 'none',
    color: 'neutral'
  }
};

export default footerConfig;
