import type { ComponentConfig } from '../../types';
import type { NavigationConfigProps } from './Navigation.types';

export const navigationConfig: ComponentConfig<NavigationConfigProps> = {
  props: {
    as: 'nav',
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
