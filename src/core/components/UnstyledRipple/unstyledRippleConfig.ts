import type { CSSProps, Color, ComponentConfig } from '../../types';
import type { UnstyledRippleConfigProps } from './UnstyledRipple.types';

type ColorState = 'stateless' | 'stateful';

type Styles = {
  styles: {
    root: {
      default: CSSProps;
      color: Record<Color, Record<ColorState, Record<string, CSSProps>>>;
    };
  };
};

export const unstyledRippleConfig: ComponentConfig<UnstyledRippleConfigProps> &
  Styles = {
  props: {
    valid: false,
    invalid: false,
    stateful: false,
    variant: 'none',
    color: 'primary',
    effect: 'normal'
  },
  styles: {
    root: {
      default: {
        position: 'absolute',
        top: 'top-0',
        left: 'left-0',
        width: 'w-full',
        height: 'h-full',
        borderRadius: 'rounded-[inherit]',
        transition: 'transition-colors',
        pointerEvents: 'pointer-events-none'
      },
      color: {
        surface: {
          stateless: {
            default: {
              hover: '[*:hover>&]:bg-surface-500/10',
              active: '[*:active:hover>&]:bg-surface-500/20',
              focus:
                '[*:focus:hover>&]:bg-surface-500/20 [*:focus>&]:bg-surface-500/20'
            },
            on: {
              hover: '[*:hover>&]:bg-surface-50/10',
              active: '[*:active:hover>&]:bg-surface-50/20',
              focus:
                '[*:focus:hover>&]:bg-surface-50/20 [*:focus>&]:bg-surface-50/20'
            }
          },
          stateful: {
            default: {
              hover:
                'peer-hover:bg-surface-500/10 peer-[:checked:hover]:bg-surface-500/10',
              active:
                'peer-[:active:hover]:bg-surface-500/20 peer-[:checked:active:hover]:bg-surface-500/20',
              focus:
                'peer-[:focus:hover]:bg-surface-500/20 peer-focus:bg-surface-500/20 peer-[:checked:focus:hover]:bg-surface-500/20 peer-[:checked:focus]:bg-surface-500/20'
            },
            on: {
              hover:
                'peer-hover:bg-surface-50/10 peer-[:checked:hover]:bg-light-surface-50/10',
              active:
                'peer-[:active:hover]:bg-surface-50/20 peer-[:checked:active:hover]:bg-light-surface-50/20',
              focus:
                'peer-[:focus:hover]:bg-surface-50/20 peer-focus:bg-surface-50/20 peer-[:checked:focus:hover]:bg-light-surface-50/20 peer-[:checked:focus]:bg-light-surface-50/20'
            }
          }
        },
        neutral: {
          stateless: {
            default: {
              hover: '[*:hover>&]:bg-neutral-500/10',
              active: '[*:active:hover>&]:bg-neutral-500/20',
              focus:
                '[*:focus:hover>&]:bg-neutral-500/20 [*:focus>&]:bg-neutral-500/20'
            },
            on: {
              hover: '[*:hover>&]:bg-neutral-50/10',
              active: '[*:active:hover>&]:bg-neutral-50/20',
              focus:
                '[*:focus:hover>&]:bg-neutral-50/20 [*:focus>&]:bg-neutral-50/20'
            }
          },
          stateful: {
            default: {
              hover:
                'peer-hover:bg-surface-500/10 peer-[:checked:hover]:bg-neutral-500/10',
              active:
                'peer-[:active:hover]:bg-surface-500/20 peer-[:checked:active:hover]:bg-neutral-500/20',
              focus:
                'peer-[:focus:hover]:bg-surface-500/20 peer-focus:bg-surface-500/20 peer-[:checked:focus:hover]:bg-neutral-500/20 peer-[:checked:focus]:bg-neutral-500/20'
            },
            on: {
              hover:
                'peer-hover:bg-surface-50/10 peer-[:checked:hover]:bg-light-neutral-50/10',
              active:
                'peer-[:active:hover]:bg-surface-50/20 peer-[:checked:active:hover]:bg-light-neutral-50/20',
              focus:
                'peer-[:focus:hover]:bg-surface-50/20 peer-focus:bg-surface-50/20 peer-[:checked:focus:hover]:bg-light-neutral-50/20 peer-[:checked:focus]:bg-light-neutral-50/20'
            }
          }
        },
        primary: {
          stateless: {
            default: {
              hover: '[*:hover>&]:bg-primary-500/10',
              active: '[*:active:hover>&]:bg-primary-500/20',
              focus:
                '[*:focus:hover>&]:bg-primary-500/20 [*:focus>&]:bg-primary-500/20'
            },
            on: {
              hover: '[*:hover>&]:bg-primary-50/10',
              active: '[*:active:hover>&]:bg-primary-50/20',
              focus:
                '[*:focus:hover>&]:bg-primary-50/20 [*:focus>&]:bg-primary-50/20'
            }
          },
          stateful: {
            default: {
              hover:
                'peer-hover:bg-surface-500/10 peer-[:checked:hover]:bg-primary-500/10',
              active:
                'peer-[:active:hover]:bg-surface-500/20 peer-[:checked:active:hover]:bg-primary-500/20',
              focus:
                'peer-[:focus:hover]:bg-surface-500/20 peer-focus:bg-surface-500/20 peer-[:checked:focus:hover]:bg-primary-500/20 peer-[:checked:focus]:bg-primary-500/20'
            },
            on: {
              hover:
                'peer-hover:bg-surface-50/10 peer-[:checked:hover]:bg-light-primary-50/10',
              active:
                'peer-[:active:hover]:bg-surface-50/20 peer-[:checked:active:hover]:bg-light-primary-50/20',
              focus:
                'peer-[:focus:hover]:bg-surface-50/20 peer-focus:bg-surface-50/20 peer-[:checked:focus:hover]:bg-light-primary-50/20 peer-[:checked:focus]:bg-light-primary-50/20'
            }
          }
        },
        secondary: {
          stateless: {
            default: {
              hover: '[*:hover>&]:bg-secondary-500/10',
              active: '[*:active:hover>&]:bg-secondary-500/20',
              focus:
                '[*:focus:hover>&]:bg-secondary-500/20 [*:focus>&]:bg-secondary-500/20'
            },
            on: {
              hover: '[*:hover>&]:bg-secondary-50/10',
              active: '[*:active:hover>&]:bg-secondary-50/20',
              focus:
                '[*:focus:hover>&]:bg-secondary-50/20 [*:focus>&]:bg-secondary-50/20'
            }
          },
          stateful: {
            default: {
              hover:
                'peer-hover:bg-surface-500/10 peer-[:checked:hover]:bg-secondary-500/10',
              active:
                'peer-[:active:hover]:bg-surface-500/20 peer-[:checked:active:hover]:bg-secondary-500/20',
              focus:
                'peer-[:focus:hover]:bg-surface-500/20 peer-focus:bg-surface-500/20 peer-[:checked:focus:hover]:bg-secondary-500/20 peer-[:checked:focus]:bg-secondary-500/20'
            },
            on: {
              hover:
                'peer-hover:bg-surface-50/10 peer-[:checked:hover]:bg-light-secondary-50/10',
              active:
                'peer-[:active:hover]:bg-surface-50/20 peer-[:checked:active:hover]:bg-light-secondary-50/20',
              focus:
                'peer-[:focus:hover]:bg-surface-50/20 peer-focus:bg-surface-50/20 peer-[:checked:focus:hover]:bg-light-secondary-50/20 peer-[:checked:focus]:bg-light-secondary-50/20'
            }
          }
        },
        tertiary: {
          stateless: {
            default: {
              hover: '[*:hover>&]:bg-tertiary-500/10',
              active: '[*:active:hover>&]:bg-tertiary-500/20',
              focus:
                '[*:focus:hover>&]:bg-tertiary-500/20 [*:focus>&]:bg-tertiary-500/20'
            },
            on: {
              hover: '[*:hover>&]:bg-tertiary-50/10',
              active: '[*:active:hover>&]:bg-tertiary-50/20',
              focus:
                '[*:focus:hover>&]:bg-tertiary-50/20 [*:focus>&]:bg-tertiary-50/20'
            }
          },
          stateful: {
            default: {
              hover:
                'peer-hover:bg-surface-500/10 peer-[:checked:hover]:bg-tertiary-500/10',
              active:
                'peer-[:active:hover]:bg-surface-500/20 peer-[:checked:active:hover]:bg-tertiary-500/20',
              focus:
                'peer-[:focus:hover]:bg-surface-500/20 peer-focus:bg-surface-500/20 peer-[:checked:focus:hover]:bg-tertiary-500/20 peer-[:checked:focus]:bg-tertiary-500/20'
            },
            on: {
              hover:
                'peer-hover:bg-surface-50/10 peer-[:checked:hover]:bg-light-tertiary-50/10',
              active:
                'peer-[:active:hover]:bg-surface-50/20 peer-[:checked:active:hover]:bg-light-tertiary-50/20',
              focus:
                'peer-[:focus:hover]:bg-surface-50/20 peer-focus:bg-surface-50/20 peer-[:checked:focus:hover]:bg-light-tertiary-50/20 peer-[:checked:focus]:bg-light-tertiary-50/20'
            }
          }
        },
        success: {
          stateless: {
            default: {
              hover: '[*:hover>&]:bg-success-500/10',
              active: '[*:active:hover>&]:bg-success-500/20',
              focus:
                '[*:focus:hover>&]:bg-success-500/20 [*:focus>&]:bg-success-500/20'
            },
            on: {
              hover: '[*:hover>&]:bg-success-50/10',
              active: '[*:active:hover>&]:bg-success-50/20',
              focus:
                '[*:focus:hover>&]:bg-success-50/20 [*:focus>&]:bg-success-50/20'
            }
          },
          stateful: {
            default: {
              hover:
                'peer-hover:bg-surface-500/10 peer-[:checked:hover]:bg-success-500/10',
              active:
                'peer-[:active:hover]:bg-surface-500/20 peer-[:checked:active:hover]:bg-success-500/20',
              focus:
                'peer-[:focus:hover]:bg-surface-500/20 peer-focus:bg-surface-500/20 peer-[:checked:focus:hover]:bg-success-500/20 peer-[:checked:focus]:bg-success-500/20'
            },
            on: {
              hover:
                'peer-hover:bg-surface-50/10 peer-[:checked:hover]:bg-light-success-50/10',
              active:
                'peer-[:active:hover]:bg-surface-50/20 peer-[:checked:active:hover]:bg-light-success-50/20',
              focus:
                'peer-[:focus:hover]:bg-surface-50/20 peer-focus:bg-surface-50/20 peer-[:checked:focus:hover]:bg-light-success-50/20 peer-[:checked:focus]:bg-light-success-50/20'
            }
          }
        },
        warning: {
          stateless: {
            default: {
              hover: '[*:hover>&]:bg-warning-500/10',
              active: '[*:active:hover>&]:bg-warning-500/20',
              focus:
                '[*:focus:hover>&]:bg-warning-500/20 [*:focus>&]:bg-warning-500/20'
            },
            on: {
              hover: '[*:hover>&]:bg-warning-50/10',
              active: '[*:active:hover>&]:bg-warning-50/20',
              focus:
                '[*:focus:hover>&]:bg-warning-50/20 [*:focus>&]:bg-warning-50/20'
            }
          },
          stateful: {
            default: {
              hover:
                'peer-hover:bg-surface-500/10 peer-[:checked:hover]:bg-warning-500/10',
              active:
                'peer-[:active:hover]:bg-surface-500/20 peer-[:checked:active:hover]:bg-warning-500/20',
              focus:
                'peer-[:focus:hover]:bg-surface-500/20 peer-focus:bg-surface-500/20 peer-[:checked:focus:hover]:bg-warning-500/20 peer-[:checked:focus]:bg-warning-500/20'
            },
            on: {
              hover:
                'peer-hover:bg-surface-50/10 peer-[:checked:hover]:bg-light-warning-50/10',
              active:
                'peer-[:active:hover]:bg-surface-50/20 peer-[:checked:active:hover]:bg-light-warning-50/20',
              focus:
                'peer-[:focus:hover]:bg-surface-50/20 peer-focus:bg-surface-50/20 peer-[:checked:focus:hover]:bg-light-warning-50/20 peer-[:checked:focus]:bg-light-warning-50/20'
            }
          }
        },
        error: {
          stateless: {
            default: {
              hover: '[*:hover>&]:bg-error-500/10',
              active: '[*:active:hover>&]:bg-error-500/20',
              focus:
                '[*:focus:hover>&]:bg-error-500/20 [*:focus>&]:bg-error-500/20'
            },
            on: {
              hover: '[*:hover>&]:bg-error-50/10',
              active: '[*:active:hover>&]:bg-error-50/20',
              focus:
                '[*:focus:hover>&]:bg-error-50/20 [*:focus>&]:bg-error-50/20'
            }
          },
          stateful: {
            default: {
              hover:
                'peer-hover:bg-surface-500/10 peer-[:checked:hover]:bg-error-500/10',
              active:
                'peer-[:active:hover]:bg-surface-500/20 peer-[:checked:active:hover]:bg-error-500/20',
              focus:
                'peer-[:focus:hover]:bg-surface-500/20 peer-focus:bg-surface-500/20 peer-[:checked:focus:hover]:bg-error-500/20 peer-[:checked:focus]:bg-error-500/20'
            },
            on: {
              hover:
                'peer-hover:bg-surface-50/10 peer-[:checked:hover]:bg-light-error-50/10',
              active:
                'peer-[:active:hover]:bg-surface-50/20 peer-[:checked:active:hover]:bg-light-error-50/20',
              focus:
                'peer-[:focus:hover]:bg-surface-50/20 peer-focus:bg-surface-50/20 peer-[:checked:focus:hover]:bg-light-error-50/20 peer-[:checked:focus]:bg-light-error-50/20'
            }
          }
        }
      }
    }
  }
};
