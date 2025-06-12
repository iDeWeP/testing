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
    scale: 'square',
    spacing: 'none',
    margin: 'none',
    border: 'none',
    radius: 'none',
    color: 'neutral'
  }
};
