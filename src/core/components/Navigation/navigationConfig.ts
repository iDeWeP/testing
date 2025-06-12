import type { ComponentConfig } from '../../types';
import type { NavigationConfigProps } from './Navigation.types';

export const navigationConfig: ComponentConfig<NavigationConfigProps> = {
  props: {
    as: 'nav',
    direction: 'row',
    wrap: 'wrap',
    justify: 'normal',
    align: 'stretch',
    gap: 'none',
    variant: 'none',
    size: 'none',
    scale: 'normal',
    margin: 'none',
    border: 'none',
    radius: 'none',
    color: 'neutral'
  }
};
