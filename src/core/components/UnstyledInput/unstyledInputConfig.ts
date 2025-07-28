import type {
  CSSProps,
  CSSStyles,
  SidePlacement,
  ComponentConfig
} from '../../types';
import type { UnstyledInputConfigProps } from './UnstyledInput.types';

type InputType = 'default' | 'input' | 'textarea';
type DefaultInputType = 'input' | 'textarea';
type VariantType = 'default' | 'outlined';

type Styles = {
  styles: {
    root: {
      default: CSSProps;
      size: Record<DefaultInputType, CSSStyles>;
    };
    decorator: {
      padding: Record<SidePlacement, Record<VariantType, CSSStyles>>;
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
        input: Record<VariantType, CSSStyles>;
        textarea: CSSStyles;
      };
    };
    shared: {
      body: CSSProps;
      label: CSSProps;
      variant: Record<InputType, CSSStyles>;
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
    ring: 'unset',
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
            default: {
              padding: 'pl-3'
            },
            decorated: {
              padding: 'pl-4 pr-3'
            }
          },
          outlined: {
            default: {
              padding: 'pl-2.75',
              borderWidth: 'border-l',
              group: '[*.on>&]:pl-2.5 [*.on>&]:border-l-2'
            },
            decorated: {
              padding: 'pl-3.75 pr-3',
              borderWidth: 'border-l',
              group: '[*.on>&]:pl-3.5 [*.on>&]:border-l-2'
            }
          }
        },
        end: {
          default: {
            default: {
              padding: 'pr-3'
            },
            decorated: {
              padding: 'pl-3 pr-4'
            }
          },
          outlined: {
            default: {
              padding: 'pr-2.75',
              borderWidth: 'border-r',
              group: '[*.on>&]:pr-2.5 [*.on>&]:border-r-2'
            },
            decorated: {
              padding: 'pl-3 pr-3.75',
              borderWidth: 'border-r',
              group: '[*.on>&]:pr-3.5 [*.on>&]:border-r-2'
            }
          }
        }
      }
    },
    input: {
      default: {
        width: 'w-full',
        padding: 'px-1',
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
          outlined: {
            sm: {
              top: 'top-2/4',
              translate: '-translate-y-2/4',
              group: '[*.on>&]:top-0'
            },
            md: {
              top: 'top-2/4',
              translate: '-translate-y-2/4',
              group: '[*.on>&]:top-0'
            },
            lg: {
              top: 'top-2/4',
              translate: '-translate-y-2/4',
              group: '[*.on>&]:top-0'
            }
          }
        },
        textarea: {
          default: {
            top: 'top-5',
            group: '[*.on>&]:top-0.5'
          },
          outlined: {
            top: 'top-2',
            group: '[*.on>&]:top-0 [*.on>&]:-translate-y-2/4'
          }
        }
      }
    },
    shared: {
      body: {
        display: 'flex',
        flexGrow: 'grow'
      },
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
            borderWidth: 'border-b',
            group: '[*.on>&]:pb-px [*.on>&]:border-b-2'
          },
          outlined: {
            borderWidth: 'border-y',
            group: '[*.on>&]:border-y-2'
          }
        },
        input: {
          default: {
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
          outlined: {
            padding: 'py-2',
            group: '[*.on>&]:py-1.75'
          }
        }
      }
    }
  }
};
