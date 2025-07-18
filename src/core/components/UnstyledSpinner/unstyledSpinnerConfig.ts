import type { CSSProps, CSSStyles, ComponentConfig } from '../../types';
import type { UnstyledSpinnerConfigProps } from './UnstyledSpinner.types';

type Styles = {
  styles: {
    root: {
      default: CSSProps;
      float: CSSStyles;
      spin: CSSProps;
    };
  };
};

export const unstyledSpinnerConfig: ComponentConfig<UnstyledSpinnerConfigProps> &
  Styles = {
  props: {
    spin: true,
    value: 75,
    variant: 'text',
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
    componentsProps: {}
  },
  styles: {
    root: {
      default: {
        display: 'inline-flex',
        borderRadius: 'rounded-full',
        color: 'fill-none'
      },
      float: {
        xs: {
          top: 'top-[calc(50%_-_0.625rem)]',
          left: 'left-[calc(50%_-_0.625rem)]'
        },
        sm: {
          top: 'top-[calc(50%_-_1rem)]',
          left: 'left-[calc(50%_-_1rem)]'
        },
        md: {
          top: 'top-[calc(50%_-_1.25rem)]',
          left: 'left-[calc(50%_-_1.25rem)]'
        },
        lg: {
          top: 'top-[calc(50%_-_1.5rem)]',
          left: 'left-[calc(50%_-_1.5rem)]'
        },
        xl: {
          top: 'top-[calc(50%_-_2rem)]',
          left: 'left-[calc(50%_-_2rem)]'
        },
        xxl: {
          top: 'top-[calc(50%_-_2.5rem)]',
          left: 'left-[calc(50%_-_2.5rem)]'
        },
        'xs-xs': {
          top: 'top-[calc(50%_-_0.375)]',
          left: 'left-[calc(50%_-_0.375)]'
        },
        'sm-sm': {
          top: 'top-[calc(50%_-_0.5rem)]',
          left: 'left-[calc(50%_-_0.5rem)]'
        },
        'md-md': {
          top: 'top-[calc(50%_-_0.625rem)]',
          left: 'left-[calc(50%_-_0.625rem)]'
        },
        'lg-lg': {
          top: 'top-[calc(50%_-_0.75rem)]',
          left: 'left-[calc(50%_-_0.75rem)]'
        },
        'xl-xl': {
          top: 'top-[calc(50%_-_0.875rem)]',
          left: 'left-[calc(50%_-_0.875rem)]'
        },
        'xxl-xxl': {
          top: 'top-[calc(50%_-_1rem)]',
          left: 'left-[calc(50%_-_1rem)]'
        }
      },
      spin: {
        animation: 'animate-spin'
      }
    }
  }
};
