import type { CSSStyles, ComponentConfig } from '../../types';
import type { UnstyledLoaderConfigProps } from './UnstyledLoader.types';

type Styles = {
  styles: {
    root: {
      float: CSSStyles;
    };
  };
};

export const unstyledLoaderConfig: ComponentConfig<UnstyledLoaderConfigProps> &
  Styles = {
  props: {
    spin: true,
    value: 0,
    variant: 'solid',
    float: false,
    size: 'md',
    thickness: 4,
    margin: 'unset',
    m: 'unset',
    mx: 'unset',
    my: 'unset',
    mt: 'unset',
    mb: 'unset',
    ml: 'unset',
    mr: 'unset',
    border: 'auto',
    color: 'unset',
    ring: 'unset',
    componentsProps: {}
  },
  styles: {
    root: {
      float: {
        xs: {
          top: 'top-[calc(50%_-_0.375rem)]',
          left: 'left-[calc(50%_-_0.375rem)]'
        },
        sm: {
          top: 'top-[calc(50%_-_0.5rem)]',
          left: 'left-[calc(50%_-_0.5rem)]'
        },
        md: {
          top: 'top-[calc(50%_-_0.625rem)]',
          left: 'left-[calc(50%_-_0.625rem)]'
        },
        lg: {
          top: 'top-[calc(50%_-_0.75rem)]',
          left: 'left-[calc(50%_-_0.75rem)]'
        },
        xl: {
          top: 'top-[calc(50%_-_0.875rem)]',
          left: 'left-[calc(50%_-_0.875rem)]'
        },
        xxl: {
          top: 'top-[calc(50%_-_1rem)]',
          left: 'left-[calc(50%_-_1rem)]'
        },
        'xs-xs': {
          top: 'top-[calc(50%_-_0.375)]',
          left: 'left-[calc(50%_-_0.375)]'
        },
        'sm-sm': {
          top: 'top-[calc(50%_-_0.375)]',
          left: 'left-[calc(50%_-_0.375)]'
        },
        'md-md': {
          top: 'top-[calc(50%_-_0.375)]',
          left: 'left-[calc(50%_-_0.375)]'
        },
        'lg-lg': {
          top: 'top-[calc(50%_-_0.375)]',
          left: 'left-[calc(50%_-_0.375)]'
        },
        'xl-xl': {
          top: 'top-[calc(50%_-_0.375)]',
          left: 'left-[calc(50%_-_0.375)]'
        },
        'xxl-xxl': {
          top: 'top-[calc(50%_-_0.375)]',
          left: 'left-[calc(50%_-_0.375)]'
        }
      }
    }
  }
};
