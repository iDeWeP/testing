import type { CSSProps, ComponentConfig } from '../../types';
import type { ImageConfigProps } from './Image.types';

type Styles = {
  styles: {
    root: {
      default: CSSProps;
    };
  };
};

const imageConfig: ComponentConfig<ImageConfigProps> & Styles = {
  props: {
    radius: 'none'
  },
  styles: {
    root: {
      default: {
        width: 'w-full',
        maxWidth: 'max-w-none'
      }
    }
  }
};

export default imageConfig;
