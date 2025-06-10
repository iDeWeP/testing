import type { ComponentConfig } from '../../types';
import type { FlexConfigProps } from './Flex.types';

const flexConfig: ComponentConfig<FlexConfigProps> = {
  props: {
    variant: 'none',
    scale: 'default',
    spacing: 'none',
    border: 'none',
    radius: 'none',
    color: 'neutral',
    margin: 'none',
    direction: 'row',
    wrap: 'wrap',
    justify: 'normal',
    align: 'stretch',
    gap: 'none'
  }
};

export default flexConfig;
