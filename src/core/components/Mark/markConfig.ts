import type { ComponentConfig } from '../../types';
import type { MarkConfigProps } from './Mark.types';

export const markConfig: ComponentConfig<MarkConfigProps> = {
  props: {
    as: 'span',
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
