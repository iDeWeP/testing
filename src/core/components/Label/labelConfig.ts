import type { ComponentConfig } from '../../types';
import type { LabelConfigProps } from './Label.types';

export const labelConfig: ComponentConfig<LabelConfigProps> = {
  props: {
    as: 'label',
    size: 'md',
    weight: 'normal',
    underline: 'none',
    wordBreak: 'normal',
    wrap: 'wrap',
    align: 'left',
    overflow: 'clip',
    variant: 'none',
    scale: 'normal',
    margin: 'none',
    border: false,
    radius: 'none',
    color: 'neutral'
  }
};
