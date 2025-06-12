import type { ComponentConfig } from '../../types';
import type { HeaderConfigProps } from './Header.types';

export const headerConfig: ComponentConfig<HeaderConfigProps> = {
  props: {
    as: 'header',
    direction: 'row',
    wrap: 'wrap',
    justify: 'normal',
    align: 'stretch',
    gap: 'none',
    variant: 'none',
    size: 'none',
    scale: 'square',
    margin: 'none',
    border: 'none',
    radius: 'none',
    color: 'neutral'
  }
};
