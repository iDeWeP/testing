import type { CSSProps, CSSStyles, Theme, ComponentConfig } from '../../types';
import type { UnstyledSwitchConfigProps } from './UnstyledSwitch.types';

type ColorType = 'bg' | 'border' | 'ring';

type Styles = {
  styles: {
    root: {
      default: CSSProps;
      size: CSSStyles;
    };
    input: {
      default: CSSProps;
      color: Record<ColorType, Record<Theme, CSSStyles>>;
    };
    icon: {
      default: CSSProps;
      fill: Record<Theme, CSSStyles>;
    };
    generic: {
      default: CSSProps;
    };
  };
};

export const unstyledSwitchConfig: ComponentConfig<UnstyledSwitchConfigProps> &
  Styles = {
  props: {
    variant: 'light',
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
    componentsProps: {}
  },
  styles: {
    root: {
      default: {
        position: 'relative'
      },
      size: {
        xs: {
          width: 'w-6',
          height: 'h-3'
        },
        sm: {
          width: 'w-8',
          height: 'h-4'
        },
        md: {
          width: 'w-10',
          height: 'h-5'
        },
        lg: {
          width: 'w-12',
          height: 'h-6'
        },
        xl: {
          width: 'w-14',
          height: 'h-7'
        },
        xxl: {
          width: 'w-16',
          height: 'h-8'
        },
        'xs-xs': {
          width: 'w-16',
          height: 'h-8'
        },
        'sm-sm': {
          width: 'w-18',
          height: 'h-9'
        },
        'md-md': {
          width: 'w-20',
          height: 'h-10'
        },
        'lg-lg': {
          width: 'w-22',
          height: 'h-11'
        },
        'xl-xl': {
          width: 'w-26',
          height: 'h-13'
        },
        'xxl-xxl': {
          width: 'w-30',
          height: 'h-15'
        }
      }
    },
    input: {
      default: {
        width: 'w-full',
        borderRadius: 'rounded-[inherit]',
        transition: 'transition-color',
        appearance: 'appearance-none',
        group: 'peer'
      },
      color: {
        bg: {
          light: {
            disabled: {
              color: 'checked:bg-disabled-500'
            },
            surface: {
              color: 'checked:bg-surface-500'
            },
            neutral: {
              color: 'checked:bg-neutral-500'
            },
            primary: {
              color: 'checked:bg-primary-500'
            },
            secondary: {
              color: 'checked:bg-secondary-500'
            },
            tertiary: {
              color: 'checked:bg-tertiary-500'
            },
            success: {
              color: 'checked:bg-success-500'
            },
            warning: {
              color: 'checked:bg-warning-500'
            },
            error: {
              color: 'checked:bg-error-500'
            },
            'disabled-light': {
              color: 'checked:bg-disabled-300'
            },
            'surface-light': {
              color: 'checked:bg-surface-300'
            },
            'neutral-light': {
              color: 'checked:bg-neutral-300'
            },
            'primary-light': {
              color: 'checked:bg-primary-300'
            },
            'secondary-light': {
              color: 'checked:bg-secondary-300'
            },
            'tertiary-light': {
              color: 'checked:bg-tertiary-300'
            },
            'success-light': {
              color: 'checked:bg-success-300'
            },
            'warning-light': {
              color: 'checked:bg-warning-300'
            },
            'error-light': {
              color: 'checked:bg-error-300'
            },
            'disabled-on': {
              color: 'checked:bg-disabled-50'
            },
            'surface-on': {
              color: 'checked:bg-surface-50'
            },
            'neutral-on': {
              color: 'checked:bg-neutral-50'
            },
            'primary-on': {
              color: 'checked:bg-primary-50'
            },
            'secondary-on': {
              color: 'checked:bg-secondary-50'
            },
            'tertiary-on': {
              color: 'checked:bg-tertiary-50'
            },
            'success-on': {
              color: 'checked:bg-success-50'
            },
            'warning-on': {
              color: 'checked:bg-warning-50'
            },
            'error-on': {
              color: 'checked:bg-error-50'
            }
          },
          dark: {
            disabled: {
              color: 'checked:bg-disabled-600'
            },
            surface: {
              color: 'checked:bg-surface-600'
            },
            neutral: {
              color: 'checked:bg-neutral-600'
            },
            primary: {
              color: 'checked:bg-primary-600'
            },
            secondary: {
              color: 'checked:bg-secondary-600'
            },
            tertiary: {
              color: 'checked:bg-tertiary-600'
            },
            success: {
              color: 'checked:bg-success-600'
            },
            warning: {
              color: 'checked:bg-warning-600'
            },
            error: {
              color: 'checked:bg-error-600'
            },
            'disabled-light': {
              color: 'checked:bg-disabled-400'
            },
            'surface-light': {
              color: 'checked:bg-surface-400'
            },
            'neutral-light': {
              color: 'checked:bg-neutral-400'
            },
            'primary-light': {
              color: 'checked:bg-primary-400'
            },
            'secondary-light': {
              color: 'checked:bg-secondary-400'
            },
            'tertiary-light': {
              color: 'checked:bg-tertiary-400'
            },
            'success-light': {
              color: 'checked:bg-success-400'
            },
            'warning-light': {
              color: 'checked:bg-warning-400'
            },
            'error-light': {
              color: 'checked:bg-error-400'
            },
            'disabled-on': {
              color: 'checked:bg-disabled-100'
            },
            'surface-on': {
              color: 'checked:bg-surface-100'
            },
            'neutral-on': {
              color: 'checked:bg-neutral-100'
            },
            'primary-on': {
              color: 'checked:bg-primary-100'
            },
            'secondary-on': {
              color: 'checked:bg-secondary-100'
            },
            'tertiary-on': {
              color: 'checked:bg-tertiary-100'
            },
            'success-on': {
              color: 'checked:bg-success-100'
            },
            'warning-on': {
              color: 'checked:bg-warning-100'
            },
            'error-on': {
              color: 'checked:bg-error-100'
            }
          }
        },
        border: {
          light: {
            disabled: {
              color: 'checked:border-disabled-500'
            },
            surface: {
              color: 'checked:border-surface-500'
            },
            neutral: {
              color: 'checked:border-neutral-500'
            },
            primary: {
              color: 'checked:border-primary-500'
            },
            secondary: {
              color: 'checked:border-secondary-500'
            },
            tertiary: {
              color: 'checked:border-tertiary-500'
            },
            success: {
              color: 'checked:border-success-500'
            },
            warning: {
              color: 'checked:border-warning-500'
            },
            error: {
              color: 'checked:border-error-500'
            },
            'disabled-light': {
              color: 'checked:border-disabled-300'
            },
            'surface-light': {
              color: 'checked:border-surface-300'
            },
            'neutral-light': {
              color: 'checked:border-neutral-300'
            },
            'primary-light': {
              color: 'checked:border-primary-300'
            },
            'secondary-light': {
              color: 'checked:border-secondary-300'
            },
            'tertiary-light': {
              color: 'checked:border-tertiary-300'
            },
            'success-light': {
              color: 'checked:border-success-300'
            },
            'warning-light': {
              color: 'checked:border-warning-300'
            },
            'error-light': {
              color: 'checked:border-error-300'
            },
            'disabled-on': {
              color: 'checked:border-disabled-50'
            },
            'surface-on': {
              color: 'checked:border-surface-50'
            },
            'neutral-on': {
              color: 'checked:border-neutral-50'
            },
            'primary-on': {
              color: 'checked:border-primary-50'
            },
            'secondary-on': {
              color: 'checked:border-secondary-50'
            },
            'tertiary-on': {
              color: 'checked:border-tertiary-50'
            },
            'success-on': {
              color: 'checked:border-success-50'
            },
            'warning-on': {
              color: 'checked:border-warning-50'
            },
            'error-on': {
              color: 'checked:border-error-50'
            }
          },
          dark: {
            disabled: {
              color: 'checked:border-disabled-600'
            },
            surface: {
              color: 'checked:border-surface-600'
            },
            neutral: {
              color: 'checked:border-neutral-600'
            },
            primary: {
              color: 'checked:border-primary-600'
            },
            secondary: {
              color: 'checked:border-secondary-600'
            },
            tertiary: {
              color: 'checked:border-tertiary-600'
            },
            success: {
              color: 'checked:border-success-600'
            },
            warning: {
              color: 'checked:border-warning-600'
            },
            error: {
              color: 'checked:border-error-600'
            },
            'disabled-light': {
              color: 'checked:border-disabled-400'
            },
            'surface-light': {
              color: 'checked:border-surface-400'
            },
            'neutral-light': {
              color: 'checked:border-neutral-400'
            },
            'primary-light': {
              color: 'checked:border-primary-400'
            },
            'secondary-light': {
              color: 'checked:border-secondary-400'
            },
            'tertiary-light': {
              color: 'checked:border-tertiary-400'
            },
            'success-light': {
              color: 'checked:border-success-400'
            },
            'warning-light': {
              color: 'checked:border-warning-400'
            },
            'error-light': {
              color: 'checked:border-error-400'
            },
            'disabled-on': {
              color: 'checked:border-disabled-100'
            },
            'surface-on': {
              color: 'checked:border-surface-100'
            },
            'neutral-on': {
              color: 'checked:border-neutral-100'
            },
            'primary-on': {
              color: 'checked:border-primary-100'
            },
            'secondary-on': {
              color: 'checked:border-secondary-100'
            },
            'tertiary-on': {
              color: 'checked:border-tertiary-100'
            },
            'success-on': {
              color: 'checked:border-success-100'
            },
            'warning-on': {
              color: 'checked:border-warning-100'
            },
            'error-on': {
              color: 'checked:border-error-100'
            }
          }
        },
        ring: {
          light: {
            disabled: {
              color: 'checked:ring-disabled-500'
            },
            surface: {
              color: 'checked:ring-surface-500'
            },
            neutral: {
              color: 'checked:ring-neutral-500'
            },
            primary: {
              color: 'checked:ring-primary-500'
            },
            secondary: {
              color: 'checked:ring-secondary-500'
            },
            tertiary: {
              color: 'checked:ring-tertiary-500'
            },
            success: {
              color: 'checked:ring-success-500'
            },
            warning: {
              color: 'checked:ring-warning-500'
            },
            error: {
              color: 'checked:ring-error-500'
            },
            'disabled-light': {
              color: 'checked:ring-disabled-300'
            },
            'surface-light': {
              color: 'checked:ring-surface-300'
            },
            'neutral-light': {
              color: 'checked:ring-neutral-300'
            },
            'primary-light': {
              color: 'checked:ring-primary-300'
            },
            'secondary-light': {
              color: 'checked:ring-secondary-300'
            },
            'tertiary-light': {
              color: 'checked:ring-tertiary-300'
            },
            'success-light': {
              color: 'checked:ring-success-300'
            },
            'warning-light': {
              color: 'checked:ring-warning-300'
            },
            'error-light': {
              color: 'checked:ring-error-300'
            },
            'disabled-on': {
              color: 'checked:ring-disabled-50'
            },
            'surface-on': {
              color: 'checked:ring-surface-50'
            },
            'neutral-on': {
              color: 'checked:ring-neutral-50'
            },
            'primary-on': {
              color: 'checked:ring-primary-50'
            },
            'secondary-on': {
              color: 'checked:ring-secondary-50'
            },
            'tertiary-on': {
              color: 'checked:ring-tertiary-50'
            },
            'success-on': {
              color: 'checked:ring-success-50'
            },
            'warning-on': {
              color: 'checked:ring-warning-50'
            },
            'error-on': {
              color: 'checked:ring-error-50'
            }
          },
          dark: {
            disabled: {
              color: 'checked:ring-disabled-600'
            },
            surface: {
              color: 'checked:ring-surface-600'
            },
            neutral: {
              color: 'checked:ring-neutral-600'
            },
            primary: {
              color: 'checked:ring-primary-600'
            },
            secondary: {
              color: 'checked:ring-secondary-600'
            },
            tertiary: {
              color: 'checked:ring-tertiary-600'
            },
            success: {
              color: 'checked:ring-success-600'
            },
            warning: {
              color: 'checked:ring-warning-600'
            },
            error: {
              color: 'checked:ring-error-600'
            },
            'disabled-light': {
              color: 'checked:ring-disabled-400'
            },
            'surface-light': {
              color: 'checked:ring-surface-400'
            },
            'neutral-light': {
              color: 'checked:ring-neutral-400'
            },
            'primary-light': {
              color: 'checked:ring-primary-400'
            },
            'secondary-light': {
              color: 'checked:ring-secondary-400'
            },
            'tertiary-light': {
              color: 'checked:ring-tertiary-400'
            },
            'success-light': {
              color: 'checked:ring-success-400'
            },
            'warning-light': {
              color: 'checked:ring-warning-400'
            },
            'error-light': {
              color: 'checked:ring-error-400'
            },
            'disabled-on': {
              color: 'checked:ring-disabled-100'
            },
            'surface-on': {
              color: 'checked:ring-surface-100'
            },
            'neutral-on': {
              color: 'checked:ring-neutral-100'
            },
            'primary-on': {
              color: 'checked:ring-primary-100'
            },
            'secondary-on': {
              color: 'checked:ring-secondary-100'
            },
            'tertiary-on': {
              color: 'checked:ring-tertiary-100'
            },
            'success-on': {
              color: 'checked:ring-success-100'
            },
            'warning-on': {
              color: 'checked:ring-warning-100'
            },
            'error-on': {
              color: 'checked:ring-error-100'
            }
          }
        }
      }
    },
    icon: {
      default: {
        padding: 'p-1',
        transition: 'transition-all',
        pointerEvents: 'pointer-events-none',
        group: 'peer-checked:left-full peer-checked:-translate-x-full'
      },
      fill: {
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
    generic: {
      default: {
        position: 'absolute',
        top: 'top-0',
        left: 'left-0',
        height: 'h-full',
        transitionDuration: 'duration-150',
        transitionTimingFunction: 'ease-in-out'
      }
    }
  }
};
