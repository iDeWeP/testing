import type { ComponentConfig } from '../../types';
import type { StackConfigProps } from './Stack.types';

export const stackConfig: ComponentConfig<StackConfigProps> = {
  props: {
    as: 'div',
    direction: 'col',
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
