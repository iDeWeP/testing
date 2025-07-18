import type {
  CSSProps,
  CornerPlacement,
  CSSStyles,
  ComponentConfig
} from '../../types';
import type { BadgeConfigProps } from './Badge.types';

type SizeType = 'normal' | 'empty';

type Styles = {
  styles: {
    root: {
      default: CSSProps;
      placement: Record<CornerPlacement, CSSStyles>;
      transform: CSSStyles;
      size: Record<SizeType, CSSStyles>;
    };
  };
};

export const badgeConfig: ComponentConfig<BadgeConfigProps> & Styles = {
  props: {
    as: 'div',
    showZero: false,
    variant: 'solid',
    placement: 'top-right',
    overlap: 'rounded',
    size: 'md',
    color: 'error',
    ring: 'unset',
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
    radius: 'full',
    r: 'unset',
    rt: 'unset',
    rb: 'unset',
    rl: 'unset',
    rr: 'unset',
    rtl: 'unset',
    rtr: 'unset',
    rbl: 'unset',
    rbr: 'unset',
    shadow: 'unset',
    gap: 'unset'
  },
  styles: {
    root: {
      default: {
        position: 'absolute',
        zIndex: 'z-100'
      },
      placement: {
        'top-left': {
          square: {
            top: 'top-0',
            left: 'left-0'
          },
          circular: {
            top: 'top-[14%]',
            left: 'left-[14%]'
          },
          rounded: {
            top: 'top-[6%]',
            left: 'left-[6%]'
          }
        },
        'top-right': {
          square: {
            top: 'top-0',
            right: 'right-0'
          },
          circular: {
            top: 'top-[14%]',
            right: 'right-[14%]'
          },
          rounded: {
            top: 'top-[6%]',
            right: 'right-[6%]'
          }
        },
        'bottom-left': {
          square: {
            bottom: 'bottom-0',
            left: 'left-0'
          },
          circular: {
            bottom: 'bottom-[14%]',
            left: 'left-[14%]'
          },
          rounded: {
            bottom: 'bottom-[6%]',
            left: 'left-[6%]'
          }
        },
        'bottom-right': {
          square: {
            bottom: 'bottom-0',
            right: 'right-0'
          },
          circular: {
            bottom: 'bottom-[14%]',
            right: 'right-[14%]'
          },
          rounded: {
            bottom: 'bottom-[6%]',
            right: 'right-[6%]'
          }
        }
      },
      transform: {
        'top-left': {
          translate: '-translate-x-2/4 -translate-y-2/4'
        },
        'top-right': {
          translate: 'translate-x-2/4 -translate-y-2/4'
        },
        'bottom-left': {
          translate: '-translate-x-2/4 translate-y-2/4'
        },
        'bottom-right': {
          translate: 'translate-x-2/4 translate-y-2/4'
        }
      },
      size: {
        normal: {
          xs: {
            minWidth: 'min-w-4'
          },
          sm: {
            minWidth: 'min-w-5'
          },
          md: {
            minWidth: 'min-w-6'
          },
          lg: {
            minWidth: 'min-w-7'
          },
          xl: {
            minWidth: 'min-w-8'
          },
          xxl: {
            minWidth: 'min-w-9'
          }
        },
        empty: {
          xs: {
            width: 'w-2',
            height: 'h-2'
          },
          sm: {
            width: 'w-2.5',
            height: 'h-2.5'
          },
          md: {
            width: 'w-3',
            height: 'h-3'
          },
          lg: {
            width: 'w-3.5',
            height: 'h-3.5'
          },
          xl: {
            width: 'w-4',
            height: 'h-4'
          },
          xxl: {
            width: 'w-4.5',
            height: 'h-4.5'
          }
        }
      }
    }
  }
};
