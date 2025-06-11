import type { ComponentConfig } from '../../types';
import type { HeaderConfigProps } from './Header.types';

const headerConfig: ComponentConfig<HeaderConfigProps> = {
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

export default headerConfig;
