import type { ComponentConfig } from '../../types';
import type { UnstyledPaperConfigProps } from './UnstyledPaper.types';

export const unstyledPaperConfig: ComponentConfig<UnstyledPaperConfigProps> = {
  props: {
    as: 'div',
    orientation: 'horizontal',
    justify: 'normal',
    align: 'stretch',
    gap: 'none',
    variant: 'none',
    size: 'none',
    scale: 'normal',
    margin: 'none',
    border: false,
    radius: 'none',
    color: 'neutral'
  }
};
