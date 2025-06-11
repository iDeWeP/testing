import type { ComponentConfig } from '../../types';
import type { FlexConfigProps } from './Flex.types';

const flexConfig: ComponentConfig<FlexConfigProps> = {
  props: {
    direction: 'row',
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

export default flexConfig;
