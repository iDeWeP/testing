import type { ComponentConfig } from '../../types';
import type { SectionConfigProps } from './Section.types';

const sectionConfig: ComponentConfig<SectionConfigProps> = {
  props: {
    direction: 'col',
    wrap: 'wrap',
    justify: 'normal',
    align: 'stretch',
    gap: 'none',
    variant: 'none',
    scale: 'default',
    spacing: 'none',
    margin: 'none',
    border: 'none',
    radius: 'none',
    color: 'neutral'
  }
};

export default sectionConfig;
