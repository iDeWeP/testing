import type {
  CSSStyles,
  CSSProps,
  Theme,
  SwitchScale,
  ComponentConfig
} from '../../types';
import type { UnstyledSwitchConfigProps } from './UnstyledSwitch.types';

type PlacementType = 'default' | 'decorated';

type Styles = {
  styles: {
    root: {
      size: Record<PlacementType, CSSStyles>;
    };
    icon: {
      default: CSSProps;
      placement: Record<PlacementType, CSSStyles>;
      color: Record<Theme, CSSStyles>;
    };
    ripple: {
      placement: CSSStyles;
    };
    shared: {
      size: Record<SwitchScale, CSSStyles>;
    };
  };
};

export const unstyledSwitchConfig: ComponentConfig<UnstyledSwitchConfigProps> &
  Styles = {
  props: {
    variant: 'solid',
    size: 'md',
    scale: 'default',
    margin: 'unset',
    m: 'unset',
    mx: 'unset',
    my: 'unset',
    mt: 'unset',
    mb: 'unset',
    ml: 'unset',
    mr: 'unset',
    border: 'auto',
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
    componentsProps: {},
    ripple: 'none'
  },
  styles: {
    root: {
      size: {
        default: {
          xs: {
            width: 'w-6'
          },
          sm: {
            width: 'w-8'
          },
          md: {
            width: 'w-10'
          },
          lg: {
            width: 'w-12'
          },
          xl: {
            width: 'w-14'
          },
          xxl: {
            width: 'w-16'
          }
        },
        decorated: {
          xs: {
            width: 'w-8'
          },
          sm: {
            width: 'w-12'
          },
          md: {
            width: 'w-15'
          },
          lg: {
            width: 'w-18'
          },
          xl: {
            width: 'w-23'
          },
          xxl: {
            width: 'w-28'
          }
        }
      }
    },
    icon: {
      default: {
        position: 'absolute',
        top: 'top-0',
        left: 'left-0',
        transition: 'transition-[fill,_left]',
        transitionDuration: 'duration-150',
        transitionTimingFunction: 'ease-in-out',
        pointerEvents: 'pointer-events-none'
      },
      placement: {
        default: {
          xs: {
            group: 'peer-checked:left-3'
          },
          sm: {
            group: 'peer-checked:left-4'
          },
          md: {
            group: 'peer-checked:left-5'
          },
          lg: {
            group: 'peer-checked:left-6'
          },
          xl: {
            group: 'peer-checked:left-7'
          },
          xxl: {
            group: 'peer-checked:left-8'
          }
        },
        decorated: {
          xs: {
            top: 'top-1',
            left: 'left-1',
            group: 'peer-checked:left-4'
          },
          sm: {
            top: 'top-2',
            left: 'left-2',
            group: 'peer-checked:left-6'
          },
          md: {
            top: 'top-2.5',
            left: 'left-2.5',
            group: 'peer-checked:left-7.5'
          },
          lg: {
            top: 'top-3',
            left: 'left-3',
            group: 'peer-checked:left-9'
          },
          xl: {
            top: 'top-4.5',
            left: 'left-4.5',
            group: 'peer-checked:left-11.5'
          },
          xxl: {
            top: 'top-6',
            left: 'left-6',
            group: 'peer-checked:left-14'
          }
        }
      },
      color: {
        light: {
          disabled: {
            color: 'peer-checked:fill-disabled-500'
          },
          surface: {
            color: 'peer-checked:fill-surface-500'
          },
          neutral: {
            color: 'peer-checked:fill-neutral-500'
          },
          primary: {
            color: 'peer-checked:fill-primary-500'
          },
          secondary: {
            color: 'peer-checked:fill-secondary-500'
          },
          tertiary: {
            color: 'peer-checked:fill-tertiary-500'
          },
          success: {
            color: 'peer-checked:fill-success-500'
          },
          warning: {
            color: 'peer-checked:fill-warning-500'
          },
          error: {
            color: 'peer-checked:fill-error-500'
          },
          'disabled-light': {
            color: 'peer-checked:fill-disabled-300'
          },
          'surface-light': {
            color: 'peer-checked:fill-surface-300'
          },
          'neutral-light': {
            color: 'peer-checked:fill-neutral-300'
          },
          'primary-light': {
            color: 'peer-checked:fill-primary-300'
          },
          'secondary-light': {
            color: 'peer-checked:fill-secondary-300'
          },
          'tertiary-light': {
            color: 'peer-checked:fill-tertiary-300'
          },
          'success-light': {
            color: 'peer-checked:fill-success-300'
          },
          'warning-light': {
            color: 'peer-checked:fill-warning-300'
          },
          'error-light': {
            color: 'peer-checked:fill-error-300'
          },
          'disabled-on': {
            color: 'peer-checked:fill-disabled-50'
          },
          'surface-on': {
            color: 'peer-checked:fill-surface-50'
          },
          'neutral-on': {
            color: 'peer-checked:fill-neutral-50'
          },
          'primary-on': {
            color: 'peer-checked:fill-primary-50'
          },
          'secondary-on': {
            color: 'peer-checked:fill-secondary-50'
          },
          'tertiary-on': {
            color: 'peer-checked:fill-tertiary-50'
          },
          'success-on': {
            color: 'peer-checked:fill-success-50'
          },
          'warning-on': {
            color: 'peer-checked:fill-warning-50'
          },
          'error-on': {
            color: 'peer-checked:fill-error-50'
          }
        },
        dark: {
          disabled: {
            color: 'peer-checked:fill-disabled-600'
          },
          surface: {
            color: 'peer-checked:fill-surface-600'
          },
          neutral: {
            color: 'peer-checked:fill-neutral-600'
          },
          primary: {
            color: 'peer-checked:fill-primary-600'
          },
          secondary: {
            color: 'peer-checked:fill-secondary-600'
          },
          tertiary: {
            color: 'peer-checked:fill-tertiary-600'
          },
          success: {
            color: 'peer-checked:fill-success-600'
          },
          warning: {
            color: 'peer-checked:fill-warning-600'
          },
          error: {
            color: 'peer-checked:fill-error-600'
          },
          'disabled-light': {
            color: 'peer-checked:fill-disabled-400'
          },
          'surface-light': {
            color: 'peer-checked:fill-surface-400'
          },
          'neutral-light': {
            color: 'peer-checked:fill-neutral-400'
          },
          'primary-light': {
            color: 'peer-checked:fill-primary-400'
          },
          'secondary-light': {
            color: 'peer-checked:fill-secondary-400'
          },
          'tertiary-light': {
            color: 'peer-checked:fill-tertiary-400'
          },
          'success-light': {
            color: 'peer-checked:fill-success-400'
          },
          'warning-light': {
            color: 'peer-checked:fill-warning-400'
          },
          'error-light': {
            color: 'peer-checked:fill-error-400'
          },
          'disabled-on': {
            color: 'peer-checked:fill-disabled-100'
          },
          'surface-on': {
            color: 'peer-checked:fill-surface-100'
          },
          'neutral-on': {
            color: 'peer-checked:fill-neutral-100'
          },
          'primary-on': {
            color: 'peer-checked:fill-primary-100'
          },
          'secondary-on': {
            color: 'peer-checked:fill-secondary-100'
          },
          'tertiary-on': {
            color: 'peer-checked:fill-tertiary-100'
          },
          'success-on': {
            color: 'peer-checked:fill-success-100'
          },
          'warning-on': {
            color: 'peer-checked:fill-warning-100'
          },
          'error-on': {
            color: 'peer-checked:fill-error-100'
          }
        }
      }
    },
    ripple: {
      placement: {
        xs: {
          group: 'peer-checked:left-3'
        },
        sm: {
          group: 'peer-checked:left-4'
        },
        md: {
          group: 'peer-checked:left-5'
        },
        lg: {
          group: 'peer-checked:left-6'
        },
        xl: {
          group: 'peer-checked:left-7'
        },
        xxl: {
          group: 'peer-checked:left-8'
        }
      }
    },
    shared: {
      size: {
        default: {
          xs: {
            height: 'h-3',
            width: 'w-6'
          },
          sm: {
            height: 'h-4',
            width: 'w-8'
          },
          md: {
            height: 'h-5',
            width: 'w-10'
          },
          lg: {
            height: 'h-6',
            width: 'w-12'
          },
          xl: {
            height: 'h-7',
            width: 'w-14'
          },
          xxl: {
            height: 'h-8',
            width: 'w-16'
          }
        },
        slider: {
          xs: {
            height: 'h-2',
            width: 'w-5'
          },
          sm: {
            height: 'h-3',
            width: 'w-7'
          },
          md: {
            height: 'h-4',
            width: 'w-9'
          },
          lg: {
            height: 'h-5',
            width: 'w-11'
          },
          xl: {
            height: 'h-6',
            width: 'w-13'
          },
          xxl: {
            height: 'h-7',
            width: 'w-15'
          }
        }
      }
    }
  }
};
