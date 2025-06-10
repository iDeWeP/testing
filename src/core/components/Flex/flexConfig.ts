import type { ComponentConfig } from '../../types';
import type { FlexConfigProps } from './Flex.types';

const flexConfig: ComponentConfig<FlexConfigProps> = {
  props: {
    scale: 'default',
    spacing: 'none',
    margin: 'none',
    direction: 'row',
    wrap: 'wrap',
    justify: 'normal',
    align: 'stretch',
    gap: 'none'
  }
};

export default flexConfig;
