import type { ComponentConfig } from '../../types';
import type { SectionConfigProps } from './Section.types';

export const sectionConfig: ComponentConfig<SectionConfigProps> = {
  props: {
    as: 'section',
    direction: 'col',
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
