import type { ComponentConfig } from '../../types';
import type { TitleConfigProps } from './Title.types';

export const titleConfig: ComponentConfig<TitleConfigProps> = {
  props: {
    as: 'h3',
    size: 'md',
    weight: 'normal',
    underline: 'none',
    wordBreak: 'normal',
    wrap: 'wrap',
    align: 'left',
    overflow: 'clip',
    variant: 'none',
    scale: 'full',
    margin: 'none',
    border: 'none',
    radius: 'none',
    color: 'neutral'
  }
};
