import type { ComponentConfig } from '../../types';
import type { SectionConfigProps } from './Section.types';

export const sectionConfig: ComponentConfig<SectionConfigProps> = {
  props: {
    direction: 'col',
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
