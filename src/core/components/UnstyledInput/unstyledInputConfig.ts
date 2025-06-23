import type {
  CSSProps,
  InputSize,
  SidePlacement,
  ComponentConfig,
  DefaultInputVariant
} from '../../types';
import type { UnstyledInputConfigProps } from './UnstyledInput.types';

type Padding = 'default' | 'decorated';

type Styles = {
  styles: {
    root: {
      default: CSSProps;
      size: Record<InputSize, CSSProps>;
    };
    decorator: {
      default: CSSProps;
      spacing: Record<SidePlacement, Record<Padding, CSSProps>>;
      outlined: Record<SidePlacement, CSSProps>;
    };
    fieldset: {
      default: CSSProps;
    };
    input: {
      default: CSSProps;
    };
    clearance: {
      default: CSSProps;
    };
    label: {
      default: CSSProps;
      variant: Record<DefaultInputVariant, Record<InputSize, CSSProps>>;
    };
    generic: {
      variant: Record<DefaultInputVariant, CSSProps>;
    };
  };
};

export const unstyledInputConfig: ComponentConfig<UnstyledInputConfigProps> &
  Styles = {
  props: {
    valid: false,
    invalid: false,
    disabled: false,
    variant: 'default',
    size: 'md',
    scale: 'normal',
    margin: 'none',
    radius: 'md',
    color: 'primary',
    componentsProps: {}
  },
  styles: {
    root: {
      default: {
        display: 'inline-flex',
        font: 'text-md',
        transition: 'transition-colors',
        transitionDuration: 'duration-500',
        transitionTimingFunction: 'ease-in-out',
        group: 'group'
      },
      size: {
        sm: {
          height: 'h-10'
        },
        md: {
          height: 'h-12'
        },
        lg: {
          height: 'h-16'
        }
      }
    },
    decorator: {
      default: {
        display: 'flex',
        gap: 'gap-2'
      },
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
        flexGrow: 'grow'
      },
    },
    input: {
      default: {
        width: 'w-full',
        margin: 'mx-1',
        focus: 'focus:outline-none'
      }
    },
    clearance: {
      default: {
        display: 'hidden',
        height: 'h-0',
        padding: 'px-1',
        font: 'text-sm',
        textWrap: 'text-nowrap',
        fill: 'fill-transparent',
        color: 'text-transparent',
        alignItems: 'align-center',
        gap: 'gap-2',
        pointerEvents: 'pointer-events-none',
        userSelect: 'select-none',
        group: 'group-[.shifted]:flex'
      }
    },
    label: {
      default: {
        display: 'flex',
        position: 'absolute',
        left: 'left-1',
        textWrap: 'text-nowrap',
        alignItems: 'align-center',
        gap: 'gap-2',
        transition: 'transition-all',
        transitionDuration: 'duration-500',
        transitionTimingFunction: 'ease-in-out',
        pointerEvents: 'pointer-events-none',
        userSelect: 'select-none',
        group: 'group-[.shifted]:h-4 group-[.shifted]:text-sm'
      },
      variant: {
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
            top: 'top-8',
            group: 'group-[.shifted]:top-3'
          }
        },
        light: {
          sm: {
            top: 'top-2/4',
            translate: '-translate-y-2/4',
            group: 'group-[.shifted]:top-0 group-[.shifted]:translate-y-0'
          },
          md: {
            top: 'top-2/4',
            translate: '-translate-y-2/4',
            group: 'group-[.shifted]:top-1 group-[.shifted]:translate-y-0'
          },
          lg: {
            top: 'top-2/4',
            translate: '-translate-y-2/4',
            group: 'group-[.shifted]:top-3 group-[.shifted]:translate-y-0'
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
      }
    },
    generic: {
      variant: {
        default: {
          padding: 'pb-0.5',
          margin: 'mb-px',
          borderWidth: 'border-b',
          alignItems: 'items-end',
          group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2'
        },
        light: {
          padding: 'pb-0.5',
          margin: 'mb-px',
          borderWidth: 'border-b',
          alignItems: 'items-end',
          group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2'
        },
        outlined: {
          margin: 'my-px',
          borderWidth: 'border-y',
          alignItems: 'items-center',
          group: 'group-[.focused]:m-0 group-[.focused]:border-y-2'
        }
      }
    }
  }
};
