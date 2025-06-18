import type { CSSProps, Size, ComponentConfig } from '../../types';
import type { UnstyledSpinnerConfigProps } from './UnstyledSpinner.types';

type Styles = {
  styles: {
    root: {
      default: CSSProps;
      float: Record<Size, CSSProps>;
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
    value: 75,
    variant: 'none',
    float: false,
    size: 'md',
    thickness: 4,
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
      spin: {
        animation: 'animate-spin'
      },
      rotate: {
        transform: '-rotate-90'
      }
    }
  }
};
