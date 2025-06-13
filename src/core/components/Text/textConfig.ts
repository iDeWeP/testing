import type { ComponentConfig } from '../../types';
import type { TextConfigProps } from './Text.types';

export const textConfig: ComponentConfig<TextConfigProps> = {
  props: {
    as: 'p',
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
    border: 'none',
    radius: 'none',
    color: 'neutral'
  }
};
