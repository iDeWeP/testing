import type { ComponentConfig } from '../../types';
import type { ListConfigProps } from './List.types';

export const listConfig: ComponentConfig<ListConfigProps> = {
  props: {
    as: 'ul',
    direction: 'col',
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
