import type { ComponentConfig } from '../../types';
import type { TextDefaultProps } from './Text.types';

export const textConfig: ComponentConfig<TextDefaultProps> = {
  props: {
    as: 'p',
    variant: 'text',
    font: 'md',
    color: 'surface'
  }
};
