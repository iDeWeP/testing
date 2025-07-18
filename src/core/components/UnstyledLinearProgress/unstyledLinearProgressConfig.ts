import type {
  CSSStyles,
  Orientation,
  CSSProps,
  ComponentConfig
} from '../../types';
import type { UnstyledLinearProgressConfigProps } from './UnstyledLinearProgress.types';

type SpacingType = 'default' | 'decorated';

type Styles = {
  styles: {
    root: {
      orientation: CSSStyles;
      size: Record<Orientation, Record<SpacingType, CSSStyles>>;
    };
    bar: {
      default: CSSProps;
      decorated: CSSProps;
      orientation: CSSStyles;
    };
    label: {
      default: CSSProps;
      rotate: CSSProps;
    };
  };
};

export const unstyledLinearProgressConfig: ComponentConfig<UnstyledLinearProgressConfigProps> &
  Styles = {
  props: {
    value: 0,
    variant: 'light',
    orientation: 'row',
    size: 'md',
    margin: 'unset',
    m: 'unset',
    mx: 'unset',
    my: 'unset',
    mt: 'unset',
    mb: 'unset',
    ml: 'unset',
    mr: 'unset',
    border: 'auto',
    b: 'unset',
    bx: 'unset',
    by: 'unset',
    bt: 'unset',
    bb: 'unset',
    bl: 'unset',
    br: 'unset',
    radius: 'unset',
    r: 'unset',
    rt: 'unset',
    rb: 'unset',
    rl: 'unset',
    rr: 'unset',
    rtl: 'unset',
    rtr: 'unset',
    rbl: 'unset',
    rbr: 'unset',
    color: 'unset',
    shadow: 'unset',
    gap: 'unset',
    componentsProps: {}
  },
  styles: {
    root: {
      orientation: {
        row: {
          width: 'w-full'
        },
        col: {
          height: 'h-full'
        }
      },
      size: {
        row: {
          default: {
            xs: {
              height: 'h-1'
            },
            sm: {
              height: 'h-2'
            },
            md: {
              height: 'h-3'
            },
            lg: {
              height: 'h-4'
            },
            xl: {
              height: 'h-5'
            },
            xxl: {
              height: 'h-6'
            },
            'xs-xs': {
              height: 'h-1.5'
            },
            'sm-sm': {
              height: 'h-2.5'
            },
            'md-md': {
              height: 'h-3.5'
            },
            'lg-lg': {
              height: 'h-4.5'
            },
            'xl-xl': {
              height: 'h-5.5'
            },
            'xxl-xxl': {
              height: 'h-6.5'
            }
          },
          decorated: {
            xs: {
              height: 'h-3'
            },
            sm: {
              height: 'h-4'
            },
            md: {
              height: 'h-5'
            },
            lg: {
              height: 'h-6'
            },
            xl: {
              height: 'h-7'
            },
            xxl: {
              height: 'h-8'
            },
            'xs-xs': {
              height: 'h-3.5'
            },
            'sm-sm': {
              height: 'h-4.5'
            },
            'md-md': {
              height: 'h-5.5'
            },
            'lg-lg': {
              height: 'h-6.5'
            },
            'xl-xl': {
              height: 'h-7.5'
            },
            'xxl-xxl': {
              height: 'h-8.5'
            }
          }
        },
        col: {
          default: {
            xs: {
              width: 'w-1'
            },
            sm: {
              width: 'w-2'
            },
            md: {
              width: 'w-3'
            },
            lg: {
              width: 'w-4'
            },
            xl: {
              width: 'w-5'
            },
            xxl: {
              width: 'w-6'
            },
            'xs-xs': {
              width: 'w-1.5'
            },
            'sm-sm': {
              width: 'w-2.5'
            },
            'md-md': {
              width: 'w-3.5'
            },
            'lg-lg': {
              width: 'w-4.5'
            },
            'xl-xl': {
              width: 'w-5.5'
            },
            'xxl-xxl': {
              width: 'w-6.5'
            }
          },
          decorated: {
            xs: {
              width: 'w-3'
            },
            sm: {
              width: 'w-4'
            },
            md: {
              width: 'w-5'
            },
            lg: {
              width: 'w-6'
            },
            xl: {
              width: 'w-7'
            },
            xxl: {
              width: 'w-8'
            },
            'xs-xs': {
              width: 'w-3.5'
            },
            'sm-sm': {
              width: 'w-4.5'
            },
            'md-md': {
              width: 'w-5.5'
            },
            'lg-lg': {
              width: 'w-6.5'
            },
            'xl-xl': {
              width: 'w-7.5'
            },
            'xxl-xxl': {
              width: 'w-8.5'
            }
          }
        }
      }
    },
    bar: {
      default: {
        borderRadius: 'rounded-[inherit]',
        transitionDuration: 'duration-150',
        transitionTimingFunction: 'ease-in-out'
      },
      decorated: {
        display: 'flex',
        justifyContent: 'justify-center',
        alignItems: 'items-center',
        overflow: 'overflow-hidden'
      },
      orientation: {
        row: {
          height: 'h-full',
          transition: 'transition-[width]'
        },
        col: {
          position: 'relative',
          bottom: 'top-full',
          translate: '-translate-y-full',
          width: 'w-full',
          transition: 'transition-[height]'
        }
      }
    },
    label: {
      default: {
        display: 'flex',
        font: 'text-xs',
        textWrap: 'text-nowrap',
        userSelect: 'select-none'
      },
      rotate: {
        transform: 'rotate-90'
      }
    }
  }
};
