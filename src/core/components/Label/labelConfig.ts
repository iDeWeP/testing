import type { ComponentConfig } from '../../types';
import type { LabelConfigProps } from './Label.types';

const labelConfig: ComponentConfig<LabelConfigProps> = {
  props: {
    direction: 'col',
    wrap: 'wrap',
    justify: 'normal',
    align: 'stretch',
    gap: 'xs',
    variant: 'none',
    scale: 'default',
    spacing: 'none',
    margin: 'none',
    border: 'none',
    radius: 'none',
    color: 'neutral'
  }
};

export default labelConfig;
