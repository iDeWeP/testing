import type { ComponentConfig } from '../../types';
import type { BoxConfigProps } from './Box.types';

const boxConfig: ComponentConfig<BoxConfigProps> = {
  props: {
    variant: 'surface',
    scale: 'default',
    spacing: 'none',
    border: 'none',
    radius: 'none',
    color: 'neutral'
  }
};

export default boxConfig;
