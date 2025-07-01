import type { ComponentConfig } from '../../types';
import type { UnstyledFlexConfigProps } from './UnstyledFlex.types';

export const unstyledFlexConfig: ComponentConfig<UnstyledFlexConfigProps> = {
  props: {
    as: 'div',
    variant: 'none',
    size: 'none',
    scale: 'normal',
    margin: 'none',
    border: false,
    radius: 'none',
    color: 'neutral',
    direction: 'row',
    wrap: 'nowrap',
    justify: 'normal',
    align: 'stretch',
    gap: 'none'
  }
};
