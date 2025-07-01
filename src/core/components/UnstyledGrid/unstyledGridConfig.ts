import type { ComponentConfig } from '../../types';
import type { UnstyledGridConfigProps } from './UnstyledGrid.types';

export const unstyledGridConfig: ComponentConfig<UnstyledGridConfigProps> = {
  props: {
    as: 'div',
    variant: 'none',
    size: 'none',
    scale: 'normal',
    margin: 'none',
    border: false,
    radius: 'none',
    color: 'neutral',
    flow: 'row',
    justifyContent: 'normal',
    alignContent: 'normal',
    justifyItems: 'stretch',
    alignItems: 'stretch',
    gap: 'none',
    colGap: 'none',
    rowGap: 'none'
  }
};
