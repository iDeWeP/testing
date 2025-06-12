import type { ComponentConfig } from '../../types';
import type { FlexConfigProps } from './Flex.types';

export const flexConfig: ComponentConfig<FlexConfigProps> = {
  props: {
    as: 'div',
    direction: 'row',
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
