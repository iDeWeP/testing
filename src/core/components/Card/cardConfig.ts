import type { ComponentConfig } from '../../types';
import type { CardConfigProps } from './Card.types';

export const cardConfig: ComponentConfig<CardConfigProps> = {
  props: {
    direction: 'col',
    wrap: 'wrap',
    justify: 'normal',
    align: 'stretch',
    gap: 'none',
    variant: 'surface',
    scale: 'square',
    spacing: 'none',
    margin: 'none',
    border: 'none',
    radius: 'xl',
    color: 'neutral'
  }
};
