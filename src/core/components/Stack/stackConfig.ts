import type { ComponentConfig } from '../../types';
import type { StackConfigProps } from './Stack.types';

const stackConfig: ComponentConfig<StackConfigProps> = {
  props: {
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
    color: 'neutral',
    direction: 'col'
  }
};

export default stackConfig;
