import type { ComponentConfig } from '../../types';
import type { HeaderConfigProps } from './Header.types';

const headerConfig: ComponentConfig<HeaderConfigProps> = {
  props: {
    direction: 'row',
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

export default headerConfig;
