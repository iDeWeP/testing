import type {
  CSSProps,
  DefaultScale,
  Size,
  ComponentConfig
} from '../../types';
import type { UnstyledSpinnerConfigProps } from './UnstyledSpinner.types';

type Styles = {
  styles: {
    root: {
      default: CSSProps;
      float: Record<DefaultScale, Record<Size, CSSProps>>;
      spin: CSSProps;
      rotate: CSSProps;
    };
  };
};

export const unstyledSpinnerConfig: ComponentConfig<UnstyledSpinnerConfigProps> &
  Styles = {
  props: {
    spin: true,
    disabled: false,
    value: 50,
    variant: 'none',
    float: false,
    size: 'md',
    scale: 'normal',
    thickness: 4,
    margin: 'none',
    border: false,
    color: 'primary',
    componentsProps: {}
  },
  styles: {
    root: {
      default: {
        display: 'inline-block',
        borderRadius: 'rounded-full'
      },
      float: {
        normal: {
          xs: {
            top: 'top-[calc(50%_-_10px)]',
            left: 'left-[calc(50%_-_10px)]'
          },
          sm: {
            top: 'top-[calc(50%_-_16px)]',
            left: 'left-[calc(50%_-_16px)]'
          },
          md: {
            top: 'top-[calc(50%_-_20px)]',
            left: 'left-[calc(50%_-_20px)]'
          },
          lg: {
            top: 'top-[calc(50%_-_24px)]',
            left: 'left-[calc(50%_-_24px)]'
          },
          xl: {
            top: 'top-[calc(50%_-_32px)]',
            left: 'left-[calc(50%_-_32px)]'
          },
          xxl: {
            top: 'top-[calc(50%_-_40px)]',
            left: 'left-[calc(50%_-_40px)]'
          }
        },
        inner: {
          xs: {
            top: 'top-[calc(50%_-_7px)]',
            left: 'left-[calc(50%_-_7px)]'
          },
          sm: {
            top: 'top-[calc(50%_-_8px)]',
            left: 'left-[calc(50%_-_8px)]'
          },
          md: {
            top: 'top-[calc(50%_-_10px)]',
            left: 'left-[calc(50%_-_10px)]'
          },
          lg: {
            top: 'top-[calc(50%_-_12px)]',
            left: 'left-[calc(50%_-_12px)]'
          },
          xl: {
            top: 'top-[calc(50%_-_14px)]',
            left: 'left-[calc(50%_-_14px)]'
          },
          xxl: {
            top: 'top-[calc(50%_-_16px)]',
            left: 'left-[calc(50%_-_16px)]'
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
