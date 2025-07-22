import type {
  CSSProps,
  CSSStyles,
  SidePlacement,
  InputVariant,
  ComponentConfig
} from '../../types';
import type { UnstyledInputConfigProps } from './UnstyledInput.types';

type InputType = 'input' | 'textarea';
type VariantType = 'default' | 'input' | 'textarea';

type Styles = {
  styles: {
    root: {
      default: CSSProps;
      size: Record<InputType, CSSStyles>;
    };
    decorator: {
      padding: Record<SidePlacement, CSSStyles>;
      outlined: CSSStyles;
    };
    fieldset: {
      default: CSSProps;
    };
    input: {
      default: CSSProps;
      size: CSSStyles;
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
    shared: {
      label: CSSProps;
      variant: Record<VariantType, CSSStyles>;
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
    width: 'default',
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
    root: {
      default: {
        display: 'inline-flex',
        font: 'text-md',
        transition: 'transition-colors',
        transitionDuration: 'duration-150',
        transitionTimingFunction: 'ease-in-out'
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
      }
    },
    decorator: {
      padding: {
        start: {
          default: {
            padding: 'pl-3'
          },
          decorated: {
            padding: 'pl-4 pr-3'
          }
        },
        end: {
          default: {
            padding: 'pr-3'
          },
          decorated: {
            padding: 'pl-3 pr-4'
          }
        }
      },
      outlined: {
        start: {
          margin: 'ml-px',
          borderWidth: 'border-l',
          group: '[*.on>&]:ml-0 [*.on>&]:border-l-2'
        },
        end: {
          margin: 'mr-px',
          borderWidth: 'border-r',
          group: '[*.on>&]:mr-0 [*.on>&]:border-r-2'
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
        group: '[*.on>&]:flex'
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
        group: '[*.on>&]:h-4 [*.on>&]:text-sm'
      },
      variant: {
        input: {
          default: {
            sm: {
              top: 'top-4',
              group: '[*.on>&]:top-0'
            },
            md: {
              top: 'top-6',
              group: '[*.on>&]:top-1'
            },
            lg: {
              top: 'top-10',
              group: '[*.on>&]:top-3'
            }
          },
          light: {
            sm: {
              top: 'top-4',
              group: '[*.on>&]:top-0'
            },
            md: {
              top: 'top-6',
              group: '[*.on>&]:top-1'
            },
            lg: {
              top: 'top-10',
              group: '[*.on>&]:top-3'
            }
          },
          outlined: {
            sm: {
              top: 'top-2/4',
              translate: '-translate-y-2/4',
              group: '[*.on>&]:-top-px'
            },
            md: {
              top: 'top-2/4',
              translate: '-translate-y-2/4',
              group: '[*.on>&]:-top-px'
            },
            lg: {
              top: 'top-2/4',
              translate: '-translate-y-2/4',
              group: '[*.on>&]:-top-px'
            }
          }
        },
        textarea: {
          default: {
            top: 'top-5',
            group: '[*.on>&]:top-0.5'
          },
          light: {
            top: 'top-5',
            group: '[*.on>&]:top-0.5'
          },
          outlined: {
            top: 'top-2',
            group: '[*.on>&]:-top-px [*.on>&]:-translate-y-2/4'
          }
        }
      }
    },
    shared: {
      label: {
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
            group: '[*.on>&]:mb-0 [*.on>&]:border-b-2'
          },
          light: {
            padding: 'pb-0.5',
            margin: 'mb-px',
            borderWidth: 'border-b',
            group: '[*.on>&]:mb-0 [*.on>&]:border-b-2'
          },
          outlined: {
            margin: 'my-px',
            borderWidth: 'border-y',
            group: '[*.on>&]:m-0 [*.on>&]:border-y-2'
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
