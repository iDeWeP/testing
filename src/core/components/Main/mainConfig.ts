import type { ComponentConfig } from '../../types';
import type { MainConfigProps } from './Main.types';

const mainConfig: ComponentConfig<MainConfigProps> = {
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

export default mainConfig;
