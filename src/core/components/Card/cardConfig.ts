import type { ComponentConfig } from '../../types';
import type { CardConfigProps } from './Card.types';

const cardConfig: ComponentConfig<CardConfigProps> = {
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

export default cardConfig;
