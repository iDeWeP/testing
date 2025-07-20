import type { CSSStyles, Theme, ComponentConfig } from '../../types';
import type { UnstyledLoaderConfigProps } from './UnstyledLoader.types';

type Styles = {
  styles: {
    root: {
      float: CSSStyles;
      color: Record<Theme, CSSStyles>;
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
      },
      color: {
        light: {
          surface: {
            color: '[*.checked>&]:stroke-surface-500'
          },
          neutral: {
            color: '[*.checked>&]:stroke-neutral-500'
          },
          primary: {
            color: '[*.checked>&]:stroke-primary-500'
          },
          secondary: {
            color: '[*.checked>&]:stroke-secondary-500'
          },
          tertiary: {
            color: '[*.checked>&]:stroke-tertiary-500'
          },
          success: {
            color: '[*.checked>&]:stroke-success-500'
          },
          warning: {
            color: '[*.checked>&]:stroke-warning-500'
          },
          error: {
            color: '[*.checked>&]:stroke-error-500'
          },
          'surface-light': {
            color: '[*.checked>&]:stroke-surface-300'
          },
          'neutral-light': {
            color: '[*.checked>&]:stroke-neutral-300'
          },
          'primary-light': {
            color: '[*.checked>&]:stroke-primary-300'
          },
          'secondary-light': {
            color: '[*.checked>&]:stroke-secondary-300'
          },
          'tertiary-light': {
            color: '[*.checked>&]:stroke-tertiary-300'
          },
          'success-light': {
            color: '[*.checked>&]:stroke-success-300'
          },
          'warning-light': {
            color: '[*.checked>&]:stroke-warning-300'
          },
          'error-light': {
            color: '[*.checked>&]:stroke-error-300'
          },
          'surface-on': {
            color: '[*.checked>&]:stroke-surface-50'
          },
          'neutral-on': {
            color: '[*.checked>&]:stroke-neutral-50'
          },
          'primary-on': {
            color: '[*.checked>&]:stroke-primary-50'
          },
          'secondary-on': {
            color: '[*.checked>&]:stroke-secondary-50'
          },
          'tertiary-on': {
            color: '[*.checked>&]:stroke-tertiary-50'
          },
          'success-on': {
            color: '[*.checked>&]:stroke-success-50'
          },
          'warning-on': {
            color: '[*.checked>&]:stroke-warning-50'
          },
          'error-on': {
            color: '[*.checked>&]:stroke-error-50'
          }
        },
        dark: {
          surface: {
            color: '[*.checked>&]:stroke-surface-600'
          },
          neutral: {
            color: '[*.checked>&]:stroke-neutral-600'
          },
          primary: {
            color: '[*.checked>&]:stroke-primary-600'
          },
          secondary: {
            color: '[*.checked>&]:stroke-secondary-600'
          },
          tertiary: {
            color: '[*.checked>&]:stroke-tertiary-600'
          },
          success: {
            color: '[*.checked>&]:stroke-success-600'
          },
          warning: {
            color: '[*.checked>&]:stroke-warning-600'
          },
          error: {
            color: '[*.checked>&]:stroke-error-600'
          },
          'surface-light': {
            color: '[*.checked>&]:stroke-surface-400'
          },
          'neutral-light': {
            color: '[*.checked>&]:stroke-neutral-400'
          },
          'primary-light': {
            color: '[*.checked>&]:stroke-primary-400'
          },
          'secondary-light': {
            color: '[*.checked>&]:stroke-secondary-400'
          },
          'tertiary-light': {
            color: '[*.checked>&]:stroke-tertiary-400'
          },
          'success-light': {
            color: '[*.checked>&]:stroke-success-400'
          },
          'warning-light': {
            color: '[*.checked>&]:stroke-warning-400'
          },
          'error-light': {
            color: '[*.checked>&]:stroke-error-400'
          },
          'surface-on': {
            color: '[*.checked>&]:stroke-surface-100'
          },
          'neutral-on': {
            color: '[*.checked>&]:stroke-neutral-100'
          },
          'primary-on': {
            color: '[*.checked>&]:stroke-primary-100'
          },
          'secondary-on': {
            color: '[*.checked>&]:stroke-secondary-100'
          },
          'tertiary-on': {
            color: '[*.checked>&]:stroke-tertiary-100'
          },
          'success-on': {
            color: '[*.checked>&]:stroke-success-100'
          },
          'warning-on': {
            color: '[*.checked>&]:stroke-warning-100'
          },
          'error-on': {
            color: '[*.checked>&]:stroke-error-100'
          }
        }
      }
    }
  }
};
