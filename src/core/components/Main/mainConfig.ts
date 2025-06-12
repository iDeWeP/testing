import type { ComponentConfig } from '../../types';
import type { MainConfigProps } from './Main.types';

export const mainConfig: ComponentConfig<MainConfigProps> = {
  props: {
    as: 'main',
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
