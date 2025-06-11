import type { ComponentConfig } from '../../types';
import type { BoxDefaultProps } from './Box.types';

const boxConfig: ComponentConfig<BoxDefaultProps> = {
  props: {
    variant: 'surface',
    scale: 'default',
    spacing: 'none',
    margin: 'none',
    border: 'none',
    radius: 'none',
    color: 'neutral'
  }
};

export default boxConfig;
