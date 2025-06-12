import type { ComponentConfig } from '../../types';
import type { CardConfigProps } from './Card.types';

export const cardConfig: ComponentConfig<CardConfigProps> = {
  props: {
    as: 'div',
    direction: 'col',
    wrap: 'wrap',
    justify: 'normal',
    align: 'stretch',
    gap: 'none',
    variant: 'surface',
    size: 'none',
    scale: 'normal',
    margin: 'none',
    border: 'none',
    radius: 'xl',
    color: 'neutral'
  }
};
