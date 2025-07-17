import type {
  CSSProps,
  CSSStyles,
  Theme,
  SidePlacement,
  InputSize,
  InputVariant,
  ComponentConfig
} from '../../types';
import type { UnstyledInputConfigProps } from './UnstyledInput.types';

type InputType = 'input' | 'textarea';
type InputGenericType = 'default' | 'input' | 'textarea';

type Styles = {
  styles: {
    container: {
      focused: CSSProps;
      shifted: CSSProps;
      default: CSSProps;
      size: Record<InputType, CSSStyles>;
      color: Record<Theme, CSSStyles>;
    };
    decorator: {
      spacing: Record<SidePlacement, CSSStyles>;
      outlined: CSSStyles;
    };
    fieldset: {
      default: CSSProps;
    };
    input: {
      default: CSSProps;
      size: Record<InputSize, CSSProps>;
      stable: CSSProps;
    };
    clearance: {
      default: CSSProps;
    };
    label: {
      default: CSSProps;
      variant: {
        input: Record<InputVariant, CSSStyles>;
        textarea: CSSStyles;
      };
    };
    generic: {
      default: CSSProps;
      variant: Record<InputGenericType, CSSStyles>;
    };
  };
};

export const unstyledInputConfig: ComponentConfig<UnstyledInputConfigProps> &
  Styles = {
  props: {
    as: 'input',
    variant: 'outlined',
    size: 'md',
    resize: false,
    width: 'normal',
    margin: 'unset',
    m: 'unset',
    mx: 'unset',
    my: 'unset',
    mt: 'unset',
    mb: 'unset',
    ml: 'unset',
    mr: 'unset',
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
    gap: 'unset',
    componentsProps: {}
  },
  styles: {
    container: {
      focused: {
        state: 'focused'
      },
      shifted: {
        state: 'shifted'
      },
      default: {
        display: 'inline-flex',
        font: 'text-md',
        transition: 'transition-colors',
        transitionDuration: 'duration-150',
        transitionTimingFunction: 'ease-in-out',
        group: 'group'
      },
      size: {
        input: {
          sm: {
            height: 'h-10'
          },
          md: {
            height: 'h-12'
          },
          lg: {
            height: 'h-16'
          }
        },
        textarea: {
          sm: {
            height: 'h-20'
          },
          md: {
            height: 'h-24'
          },
          lg: {
            height: 'h-32'
          },
          full: {
            height: 'h-full'
          }
        }
      },
      color: {
        light: {
          surface: {
            group: '[.focused]:text-surface-500 [.focused]:fill-surface-500'
          },
          neutral: {
            group: '[.focused]:text-neutral-500 [.focused]:fill-neutral-500'
          },
          primary: {
            group: '[.focused]:text-primary-500 [.focused]:fill-primary-500'
          },
          secondary: {
            group: '[.focused]:text-secondary-500 [.focused]:fill-secondary-500'
          },
          tertiary: {
            group: '[.focused]:text-tertiary-500 [.focused]:fill-tertiary-500'
          },
          success: {
            group: '[.focused]:text-success-500 [.focused]:fill-success-500'
          },
          warning: {
            group: '[.focused]:text-warning-500 [.focused]:fill-warning-500'
          },
          error: {
            group: '[.focused]:text-error-500 [.focused]:fill-error-500'
          },
          'surface-on': {
            group: '[.focused]:text-surface-50 [.focused]:fill-surface-50'
          },
          'neutral-on': {
            group: '[.focused]:text-neutral-50 [.focused]:fill-neutral-50'
          },
          'primary-on': {
            group: '[.focused]:text-primary-50 [.focused]:fill-primary-50'
          },
          'secondary-on': {
            group: '[.focused]:text-secondary-50 [.focused]:fill-secondary-50'
          },
          'tertiary-on': {
            group: '[.focused]:text-tertiary-50 [.focused]:fill-tertiary-50'
          },
          'success-on': {
            group: '[.focused]:text-success-50 [.focused]:fill-success-50'
          },
          'warning-on': {
            group: '[.focused]:text-warning-50 [.focused]:fill-warning-50'
          },
          'error-on': {
            group: '[.focused]:text-error-50 [.focused]:fill-error-50'
          }
        },
        dark: {
          surface: {
            group: '[.focused]:text-surface-600 [.focused]:fill-surface-600'
          },
          neutral: {
            group: '[.focused]:text-neutral-600 [.focused]:fill-neutral-600'
          },
          primary: {
            group: '[.focused]:text-primary-600 [.focused]:fill-primary-600'
          },
          secondary: {
            group: '[.focused]:text-secondary-600 [.focused]:fill-secondary-600'
          },
          tertiary: {
            group: '[.focused]:text-tertiary-600 [.focused]:fill-tertiary-600'
          },
          success: {
            group: '[.focused]:text-success-600 [.focused]:fill-success-600'
          },
          warning: {
            group: '[.focused]:text-warning-600 [.focused]:fill-warning-600'
          },
          error: {
            group: '[.focused]:text-error-600 [.focused]:fill-error-600'
          },
          'surface-on': {
            group: '[.focused]:text-surface-100 [.focused]:fill-surface-100'
          },
          'neutral-on': {
            group: '[.focused]:text-neutral-100 [.focused]:fill-neutral-100'
          },
          'primary-on': {
            group: '[.focused]:text-primary-100 [.focused]:fill-primary-100'
          },
          'secondary-on': {
            group: '[.focused]:text-secondary-100 [.focused]:fill-secondary-100'
          },
          'tertiary-on': {
            group: '[.focused]:text-tertiary-100 [.focused]:fill-tertiary-100'
          },
          'success-on': {
            group: '[.focused]:text-success-100 [.focused]:fill-success-100'
          },
          'warning-on': {
            group: '[.focused]:text-warning-100 [.focused]:fill-warning-100'
          },
          'error-on': {
            group: '[.focused]:text-error-100 [.focused]:fill-error-100'
          }
        }
      }
    },
    decorator: {
      spacing: {
        left: {
          default: {
            padding: 'pl-3'
          },
          decorated: {
            padding: 'pl-4 pr-3'
          }
        },
        right: {
          default: {
            padding: 'pr-3'
          },
          decorated: {
            padding: 'pl-3 pr-4'
          }
        }
      },
      outlined: {
        left: {
          margin: 'ml-px',
          borderWidth: 'border-l',
          group: 'group-[.focused]:ml-0 group-[.focused]:border-l-2'
        },
        right: {
          margin: 'mr-px',
          borderWidth: 'border-r',
          group: 'group-[.focused]:mr-0 group-[.focused]:border-r-2'
        }
      }
    },
    fieldset: {
      default: {
        display: 'flex',
        position: 'relative',
        flexGrow: 'grow'
      }
    },
    input: {
      default: {
        width: 'w-full',
        margin: 'mx-1',
        focus: 'focus:outline-none'
      },
      size: {
        sm: {
          minHeight: 'min-h-14'
        },
        md: {
          minHeight: 'min-h-18'
        },
        lg: {
          minHeight: 'min-h-22'
        }
      },
      stable: {
        resize: 'resize-none'
      }
    },
    clearance: {
      default: {
        display: 'hidden',
        height: 'h-0',
        padding: 'px-1',
        font: 'text-sm',
        fill: 'fill-transparent',
        color: 'text-transparent',
        group: 'group-[.shifted]:flex'
      }
    },
    label: {
      default: {
        display: 'flex',
        position: 'absolute',
        left: 'left-1',
        transition: 'transition-all',
        transitionDuration: 'duration-150',
        transitionTimingFunction: 'ease-in-out',
        group: 'group-[.shifted]:h-4 group-[.shifted]:text-sm'
      },
      variant: {
        input: {
          default: {
            sm: {
              top: 'top-4',
              group: 'group-[.shifted]:top-0'
            },
            md: {
              top: 'top-6',
              group: 'group-[.shifted]:top-1'
            },
            lg: {
              top: 'top-10',
              group: 'group-[.shifted]:top-3'
            }
          },
          light: {
            sm: {
              top: 'top-4',
              group: 'group-[.shifted]:top-0'
            },
            md: {
              top: 'top-6',
              group: 'group-[.shifted]:top-1'
            },
            lg: {
              top: 'top-10',
              group: 'group-[.shifted]:top-3'
            }
          },
          outlined: {
            sm: {
              top: 'top-2/4',
              translate: '-translate-y-2/4',
              group: 'group-[.shifted]:-top-px'
            },
            md: {
              top: 'top-2/4',
              translate: '-translate-y-2/4',
              group: 'group-[.shifted]:-top-px'
            },
            lg: {
              top: 'top-2/4',
              translate: '-translate-y-2/4',
              group: 'group-[.shifted]:-top-px'
            }
          }
        },
        textarea: {
          default: {
            top: 'top-5',
            group: 'group-[.shifted]:top-0.5'
          },
          light: {
            top: 'top-5',
            group: 'group-[.shifted]:top-0.5'
          },
          outlined: {
            top: 'top-2',
            group: 'group-[.shifted]:-top-px group-[.shifted]:-translate-y-2/4'
          }
        }
      }
    },
    generic: {
      default: {
        textWrap: 'text-nowrap',
        alignItems: 'align-center',
        pointerEvents: 'pointer-events-none',
        userSelect: 'select-none'
      },
      variant: {
        default: {
          default: {
            padding: 'pb-0.5',
            margin: 'mb-px',
            borderWidth: 'border-b',
            group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2'
          },
          light: {
            padding: 'pb-0.5',
            margin: 'mb-px',
            borderWidth: 'border-b',
            group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2'
          },
          outlined: {
            margin: 'my-px',
            borderWidth: 'border-y',
            group: 'group-[.focused]:m-0 group-[.focused]:border-y-2'
          }
        },
        input: {
          default: {
            alignItems: 'items-end'
          },
          light: {
            alignItems: 'items-end'
          },
          outlined: {
            alignItems: 'items-center'
          }
        },
        textarea: {
          default: {
            padding: 'pt-5'
          },
          light: {
            padding: 'pt-5'
          },
          outlined: {
            padding: 'py-2'
          }
        }
      }
    }
  }
};
