import type {
  CSSStyles,
  Orientation,
  CSSProps,
  ComponentConfig
} from '../../types';
import type { UnstyledLinearProgressConfigProps } from './UnstyledLinearProgress.types';

type Padding = 'default' | 'decorated';

type Styles = {
  styles: {
    root: {
      orientation: CSSStyles;
      size: Record<Orientation, Record<Padding, CSSStyles>>;
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
              height: 'h-1.5'
            },
            md: {
              height: 'h-2'
            },
            lg: {
              height: 'h-2.5'
            },
            xl: {
              height: 'h-3'
            },
            xxl: {
              height: 'h-3.5'
            }
          },
          decorated: {
            xs: {
              height: 'h-4'
            },
            sm: {
              height: 'h-4.5'
            },
            md: {
              height: 'h-5'
            },
            lg: {
              height: 'h-5.5'
            },
            xl: {
              height: 'h-6'
            },
            xxl: {
              height: 'h-6.5'
            }
          }
        },
        col: {
          default: {
            xs: {
              width: 'w-1'
            },
            sm: {
              width: 'w-1.5'
            },
            md: {
              width: 'w-2'
            },
            lg: {
              width: 'w-2.5'
            },
            xl: {
              width: 'w-3'
            },
            xxl: {
              width: 'w-3.5'
            }
          },
          decorated: {
            xs: {
              width: 'w-4'
            },
            sm: {
              width: 'w-4.5'
            },
            md: {
              width: 'w-5'
            },
            lg: {
              width: 'w-5.5'
            },
            xl: {
              width: 'w-6'
            },
            xxl: {
              width: 'w-6.5'
            }
          }
        }
      }
    },
    bar: {
      default: {
        borderRadius: 'rounded-inherit'
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
