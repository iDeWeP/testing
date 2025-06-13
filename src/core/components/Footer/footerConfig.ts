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
    scale: 'normal',
    margin: 'none',
    border: false,
    radius: 'none',
    color: 'neutral'
  }
};
