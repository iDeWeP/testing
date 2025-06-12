import type { ComponentConfig } from '../../types';
import type { FooterConfigProps } from './Footer.types';

export const footerConfig: ComponentConfig<FooterConfigProps> = {
  props: {
    as: 'footer',
    direction: 'row',
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
