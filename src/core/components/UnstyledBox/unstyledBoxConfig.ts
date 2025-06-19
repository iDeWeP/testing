import type { ComponentConfig } from '../../types';
import type { UnstyledBoxConfigProps } from './UnstyledBox.types';

export const unstyledBoxConfig: ComponentConfig<UnstyledBoxConfigProps> = {
  props: {
    as: 'div',
    disabled: false,
    variant: 'none',
    size: 'none',
    scale: 'normal',
    margin: 'none',
    border: false,
    radius: 'none',
    color: 'neutral'
  }
};
