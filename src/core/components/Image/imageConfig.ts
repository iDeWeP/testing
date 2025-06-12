import type { CSSProps, ComponentConfig } from '../../types';
import type { ImageConfigProps } from './Image.types';

type Styles = {
  styles: {
    root: {
      default: CSSProps;
    };
  };
};

export const imageConfig: ComponentConfig<ImageConfigProps> & Styles = {
  props: {
    as: 'img',
    variant: 'none',
    scale: 'square-full',
    spacing: 'none',
    margin: 'none',
    border: false,
    radius: 'none',
    color: 'neutral'
  },
  styles: {
    root: {
      default: {
        maxWidth: 'max-w-none'
      }
    }
  }
};
