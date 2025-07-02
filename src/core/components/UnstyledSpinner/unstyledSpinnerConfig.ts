import type {
  CSSProps,
  SizeScale,
  DefaultSize,
  ComponentConfig
} from '../../types';
import type { UnstyledSpinnerConfigProps } from './UnstyledSpinner.types';

type Styles = {
  styles: {
    root: {
      default: CSSProps;
      float: Record<SizeScale, Record<DefaultSize, CSSProps>>;
      spin: CSSProps;
      rotate: CSSProps;
    };
  };
};

export const unstyledSpinnerConfig: ComponentConfig<UnstyledSpinnerConfigProps> &
  Styles = {
  props: {
    spin: true,
    value: 75,
    variant: 'none',
    float: false,
    size: 'md',
    thickness: 4,
    scale: 'normal',
    margin: 'none',
    border: false,
    color: 'neutral',
    componentsProps: {}
  },
  styles: {
    root: {
      default: {
        display: 'inline-block',
        borderRadius: 'rounded-full',
        color: 'fill-none'
      },
      float: {
        normal: {
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
          }
        },
        text: {
          xs: {
            top: 'top-[calc(50%_-_0.375)]',
            left: 'left-[calc(50%_-_0.375)]'
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
          }
        }
      },
      spin: {
        animation: 'animate-spin'
      },
      rotate: {
        transform: '-rotate-90'
      }
    }
  }
};
