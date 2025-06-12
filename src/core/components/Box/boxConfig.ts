import type { ComponentConfig } from '../../types';
import type { BoxConfigProps } from './Box.types';

export const boxConfig: ComponentConfig<BoxConfigProps> = {
  props: {
    variant: 'surface',
    scale: 'square',
    spacing: 'none',
    margin: 'none',
    border: 'none',
    radius: 'none',
    color: 'neutral'
  }
};
