import type { Color, CSSProps, Theme } from '../types';

type MergedColor = 'disabled' | Color;
type GapDirection = 'default' | 'row' | 'col';
type SpacingScale =
  | 'normal'
  | 'square'
  | 'border'
  | 'border-square'
  | 'border-y'
  | 'border-square-y'
  | 'border-y-left'
  | 'border-square-y-left'
  | 'border-y-right'
  | 'border-square-y-right';

type Styles = Record<string, CSSProps>;

type Generic = {
  styles: {
    state: {
      focused: CSSProps;
      shifted: CSSProps;
    };
    focusable: Styles;
    loading: Styles;
    display: Styles;
    position: Styles;
    size: {
      normal: {
        normal: Styles;
        square: Styles;
      };
      text: {
        normal: Styles;
        square: Styles;
      };
      font: Styles;
      title: Styles;
    };
    scale: Styles;
    spacing: {
      normal: Record<SpacingScale, Styles>;
      container: Styles;
    };
    margin: Styles;
    border: Styles;
    radius: Styles;
    weight: Styles;
    underline: Styles;
    wordBreak: Styles;
    textWrap: Styles;
    textAlign: Styles;
    textOverflow: Styles;
    color: {
      bg: Record<Theme, Record<MergedColor, Styles>>;
      border: Record<Theme, Record<MergedColor, Styles>>;
      text: Record<Theme, Record<MergedColor, Styles>>;
      fill: Record<Theme, Record<MergedColor, Styles>>;
      stroke: Record<Theme, Record<MergedColor, Styles>>;
      ring: Record<Theme, Record<MergedColor, Styles>>;
      input: Record<Theme, Record<Color, Styles>>;
    };
    direction: Styles;
    flow: Styles;
    wrap: Styles;
    justifyContent: Styles;
    alignContent: Styles;
    justifyItems: Styles;
    alignItems: Styles;
    gap: Record<GapDirection, Styles>;
    effect: Styles;
    cursor: Styles;
  };
};

export const generic: Generic = {
  styles: {
    state: {
      focused: {
        state: 'focused'
      },
      shifted: {
        state: 'shifted'
      }
    },
    focusable: {
      default: {
        focus: 'focus:outline-none',
        focusVisible: 'focus-visible:ring-4'
      },
      disabled: {
        cursor: 'cursor-not-allowed',
        userSelect: 'select-none'
      }
    },
    loading: {
      normal: {
        opacity: 'opacity-50'
      },
      hide: {
        color: 'text-transparent',
        fill: 'fill-transparent',
        opacity: 'opacity-50'
      }
    },
    display: {
      flex: {
        display: 'flex'
      },
      grid: {
        display: 'grid'
      },
      'inline-flex': {
        display: 'inline-flex'
      }
    },
    position: {
      static: {
        position: 'static'
      },
      absolute: {
        position: 'absolute'
      },
      fixed: {
        position: 'fixed'
      },
      relative: {
        position: 'relative'
      }
    },
    size: {
      normal: {
        normal: {
          xs: {
            height: 'h-5'
          },
          sm: {
            height: 'h-8'
          },
          md: {
            height: 'h-10'
          },
          lg: {
            height: 'h-12'
          },
          xl: {
            height: 'h-16'
          },
          xxl: {
            height: 'h-20'
          }
        },
        square: {
          xs: {
            width: 'w-5',
            height: 'h-5'
          },
          sm: {
            width: 'w-8',
            height: 'h-8'
          },
          md: {
            width: 'w-10',
            height: 'h-10'
          },
          lg: {
            width: 'w-12',
            height: 'h-12'
          },
          xl: {
            width: 'w-16',
            height: 'h-16'
          },
          xxl: {
            width: 'w-20',
            height: 'h-20'
          }
        }
      },
      text: {
        normal: {
          xs: {
            height: 'h-3'
          },
          sm: {
            height: 'h-4'
          },
          md: {
            height: 'h-4'
          },
          lg: {
            height: 'h-5'
          },
          xl: {
            height: 'h-6'
          },
          xxl: {
            height: 'h-7'
          }
        },
        square: {
          xs: {
            width: 'w-3',
            height: 'h-3'
          },
          sm: {
            width: 'w-4',
            height: 'h-4'
          },
          md: {
            width: 'w-5',
            height: 'h-5'
          },
          lg: {
            width: 'w-6',
            height: 'h-6'
          },
          xl: {
            width: 'w-7',
            height: 'h-7'
          },
          xxl: {
            width: 'w-8',
            height: 'h-8'
          }
        }
      },
      font: {
        xs: {
          fontSize: 'text-xs'
        },
        sm: {
          fontSize: 'text-sm'
        },
        md: {
          fontSize: 'text-base'
        },
        lg: {
          fontSize: 'text-lg'
        },
        xl: {
          fontSize: 'text-xl'
        },
        xxl: {
          fontSize: 'text-2xl'
        }
      },
      title: {
        xs: {
          fontSize: 'text3xl'
        },
        sm: {
          fontSize: 'text-4xl'
        },
        md: {
          fontSize: 'text-5xl'
        },
        lg: {
          fontSize: 'text-6xl'
        },
        xl: {
          fontSize: 'text-7xk'
        },
        xxl: {
          fontSize: 'text-8xl'
        }
      }
    },
    scale: {
      fit: {
        width: 'w-fit'
      },
      full: {
        width: 'w-full'
      },
      square: {
        overflow: 'overflow-hidden'
      }
    },
    spacing: {
      normal: {
        normal: {
          xs: {
            padding: 'px-2 py-1'
          },
          sm: {
            padding: 'px-4 py-2'
          },
          md: {
            padding: 'px-5 py-2.5'
          },
          lg: {
            padding: 'px-6 py-3'
          },
          xl: {
            padding: 'px-9 py-4.5'
          },
          xxl: {
            padding: 'px-12 py-6'
          }
        },
        square: {
          xs: {
            padding: 'p-1'
          },
          sm: {
            padding: 'p-2'
          },
          md: {
            padding: 'p-2.5'
          },
          lg: {
            padding: 'p-3'
          },
          xl: {
            padding: 'p-4.5'
          },
          xxl: {
            padding: 'p-6'
          }
        },
        border: {
          xs: {
            padding: 'px-1.75 py-0.75'
          },
          sm: {
            padding: 'px-3.75 py-1.75'
          },
          md: {
            padding: 'px-4.75 py-2.25'
          },
          lg: {
            padding: 'px-5.75 py-2.75'
          },
          xl: {
            padding: 'px-8.75 py-4.25'
          },
          xxl: {
            padding: 'px-11.75 py-5.75'
          }
        },
        'border-square': {
          xs: {
            padding: 'p-0.75'
          },
          sm: {
            padding: 'p-1.75'
          },
          md: {
            padding: 'p-2.25'
          },
          lg: {
            padding: 'p-2.75'
          },
          xl: {
            padding: 'p-4.25'
          },
          xxl: {
            padding: 'p-5.75'
          }
        },
        'border-y': {
          xs: {
            padding: 'px-2 py-0.75'
          },
          sm: {
            padding: 'px-4 py-1.75'
          },
          md: {
            padding: 'px-5 py-2.25'
          },
          lg: {
            padding: 'px-6 py-2.75'
          },
          xl: {
            padding: 'px-9 py-4.25'
          },
          xxl: {
            padding: 'px-12 py-5.75'
          }
        },
        'border-square-y': {
          xs: {
            padding: 'px-1 py-0.75'
          },
          sm: {
            padding: 'px-2 py-1.75'
          },
          md: {
            padding: 'px-2.5 py-2.25'
          },
          lg: {
            padding: 'px-3 py-2.75'
          },
          xl: {
            padding: 'px-4.5 py-4.25'
          },
          xxl: {
            padding: 'px-6 py-5.75'
          }
        },
        'border-y-left': {
          xs: {
            padding: 'pl-1.75 pr-2 py-0.75'
          },
          sm: {
            padding: 'pl-3.75 pr-4 py-1.75'
          },
          md: {
            padding: 'pl-4.75 pr-5 py-2.25'
          },
          lg: {
            padding: 'pl-5.75 pr-6 py-2.75'
          },
          xl: {
            padding: 'pl-8.75 pr-9 py-4.25'
          },
          xxl: {
            padding: 'pl-11.75 pr-12 py-5.75'
          }
        },
        'border-square-y-left': {
          xs: {
            padding: 'pl-0.75 pr-1 py-0.75'
          },
          sm: {
            padding: 'pl-1.75 pr-2 py-1.75'
          },
          md: {
            padding: 'pl-2.25 pr-2.5 py-2.25'
          },
          lg: {
            padding: 'pl-2.75 pr-3 py-2.75'
          },
          xl: {
            padding: 'pl-4.25 pr-4.5 py-4.25'
          },
          xxl: {
            padding: 'pl-5.75 pr-6 py-5.75'
          }
        },
        'border-y-right': {
          xs: {
            padding: 'pl-2 pr-1.75 py-0.75'
          },
          sm: {
            padding: 'pl-4 pr-3.75 py-1.75'
          },
          md: {
            padding: 'pl-5 pr-4.75 py-2.25'
          },
          lg: {
            padding: 'pl-6 pr-5.75 py-2.75'
          },
          xl: {
            padding: 'pl-9 pr-8.75 py-4.25'
          },
          xxl: {
            padding: 'pl-12 pr-11.75 py-5.75'
          }
        },
        'border-square-y-right': {
          xs: {
            padding: 'pl-1 pr-0.75 py-0.75'
          },
          sm: {
            padding: 'pl-2 pr-1.75 py-1.75'
          },
          md: {
            padding: 'pl-2.5 pr-2.25 py-2.25'
          },
          lg: {
            padding: 'pl-3 pr-2.75 py-2.75'
          },
          xl: {
            padding: 'pl-4.5 pr-4.25 py-4.25'
          },
          xxl: {
            padding: 'pl-6 pr-5.75 py-5.75'
          }
        }
      },
      container: {
        xs: {
          padding: 'p-2'
        },
        sm: {
          padding: 'p-4'
        },
        md: {
          padding: 'p-6'
        },
        lg: {
          padding: 'p-8'
        },
        xl: {
          padding: 'p-12'
        },
        xxl: {
          padding: 'p-16'
        },
        'xs-x': {
          padding: 'px-2'
        },
        'xs-y': {
          padding: 'py-2'
        },
        'xs-top': {
          padding: 'pt-2'
        },
        'xs-bottom': {
          padding: 'pb-2'
        },
        'xs-left': {
          padding: 'pl-2'
        },
        'xs-right': {
          padding: 'pr-2'
        },
        'xs-x-top': {
          padding: 'px-2 pt-2'
        },
        'xs-x-bottom': {
          padding: 'px-2 pb-2'
        },
        'xs-y-left': {
          padding: 'py-2 pl-2'
        },
        'xs-y-right': {
          padding: 'py-2 pr-2'
        },
        'xs-top-left': {
          padding: 'pt-2 pl-2'
        },
        'xs-top-right': {
          padding: 'pt-2 pr-2'
        },
        'xs-bottom-left': {
          padding: 'pb-2 pl-2'
        },
        'xs-bottom-right': {
          padding: 'pb-2 pr-2'
        },
        'sm-x': {
          padding: 'px-4'
        },
        'sm-y': {
          padding: 'py-4'
        },
        'sm-top': {
          padding: 'pt-4'
        },
        'sm-bottom': {
          padding: 'pb-4'
        },
        'sm-left': {
          padding: 'pl-4'
        },
        'sm-right': {
          padding: 'pr-4'
        },
        'sm-x-top': {
          padding: 'px-4 pt-4'
        },
        'sm-x-bottom': {
          padding: 'px-4 pb-4'
        },
        'sm-y-left': {
          padding: 'py-4 pl-4'
        },
        'sm-y-right': {
          padding: 'py-4 pr-4'
        },
        'sm-top-left': {
          padding: 'pt-4 pl-4'
        },
        'sm-top-right': {
          padding: 'pt-4 pr-4'
        },
        'sm-bottom-left': {
          padding: 'pb-4 pl-4'
        },
        'sm-bottom-right': {
          padding: 'pb-4 pr-4'
        },
        'md-x': {
          padding: 'px-6'
        },
        'md-y': {
          padding: 'py-6'
        },
        'md-top': {
          padding: 'pt-6'
        },
        'md-bottom': {
          padding: 'pb-6'
        },
        'md-left': {
          padding: 'pl-6'
        },
        'md-right': {
          padding: 'pr-6'
        },
        'md-x-top': {
          padding: 'px-6 pt-6'
        },
        'md-x-bottom': {
          padding: 'px-6 pb-6'
        },
        'md-y-left': {
          padding: 'py-6 pl-6'
        },
        'md-y-right': {
          padding: 'py-6 pr-6'
        },
        'md-top-left': {
          padding: 'pt-6 pl-6'
        },
        'md-top-right': {
          padding: 'pt-6 pr-6'
        },
        'md-bottom-left': {
          padding: 'pb-6 pl-6'
        },
        'md-bottom-right': {
          padding: 'pb-6 pr-6'
        },
        'lg-x': {
          padding: 'px-8'
        },
        'lg-y': {
          padding: 'py-8'
        },
        'lg-top': {
          padding: 'pt-8'
        },
        'lg-bottom': {
          padding: 'pb-8'
        },
        'lg-left': {
          padding: 'pl-8'
        },
        'lg-right': {
          padding: 'pr-8'
        },
        'lg-x-top': {
          padding: 'px-8 pt-8'
        },
        'lg-x-bottom': {
          padding: 'px-8 pb-8'
        },
        'lg-y-left': {
          padding: 'py-8 pl-8'
        },
        'lg-y-right': {
          padding: 'py-8 pr-8'
        },
        'lg-top-left': {
          padding: 'pt-8 pl-8'
        },
        'lg-top-right': {
          padding: 'pt-8 pr-8'
        },
        'lg-bottom-left': {
          padding: 'pb-8 pl-8'
        },
        'lg-bottom-right': {
          padding: 'pb-8 pr-8'
        },
        'xl-x': {
          padding: 'px-12'
        },
        'xl-y': {
          padding: 'py-12'
        },
        'xl-top': {
          padding: 'pt-12'
        },
        'xl-bottom': {
          padding: 'pb-12'
        },
        'xl-left': {
          padding: 'pl-12'
        },
        'xl-right': {
          padding: 'pr-12'
        },
        'xl-x-top': {
          padding: 'px-12 pt-12'
        },
        'xl-x-bottom': {
          padding: 'px-12 pb-12'
        },
        'xl-y-left': {
          padding: 'py-12 pl-12'
        },
        'xl-y-right': {
          padding: 'py-12 pr-12'
        },
        'xl-top-left': {
          padding: 'pt-12 pl-12'
        },
        'xl-top-right': {
          padding: 'pt-12 pr-12'
        },
        'xl-bottom-left': {
          padding: 'pb-12 pl-12'
        },
        'xl-bottom-right': {
          padding: 'pb-12 pr-12'
        },
        'xxl-x': {
          padding: 'px-16'
        },
        'xxl-y': {
          padding: 'py-16'
        },
        'xxl-top': {
          padding: 'pt-16'
        },
        'xxl-bottom': {
          padding: 'pb-16'
        },
        'xxl-left': {
          padding: 'pl-16'
        },
        'xxl-right': {
          padding: 'pr-16'
        },
        'xxl-x-top': {
          padding: 'px-16 pt-16'
        },
        'xxl-x-bottom': {
          padding: 'px-16 pb-16'
        },
        'xxl-y-left': {
          padding: 'py-16 pl-16'
        },
        'xxl-y-right': {
          padding: 'py-16 pr-16'
        },
        'xxl-top-left': {
          padding: 'pt-16 pl-16'
        },
        'xxl-top-right': {
          padding: 'pt-16 pr-16'
        },
        'xxl-bottom-left': {
          padding: 'pb-16 pl-16'
        },
        'xxl-bottom-right': {
          padding: 'pb-16 pr-16'
        },
        'xs-xs': {
          padding: 'px-2 py-1'
        },
        'sm-sm': {
          padding: 'px-4 py-2'
        },
        'md-md': {
          padding: 'px-6 py-3'
        },
        'lg-lg': {
          padding: 'px-8 py-4'
        },
        'xl-xl': {
          padding: 'px-12 py-6'
        },
        'xxl-xxl': {
          padding: 'px-16 py-8'
        },
        'xs-xs-x': {
          padding: 'px-2'
        },
        'xs-xs-y': {
          padding: 'py-1'
        },
        'xs-xs-top': {
          padding: 'pt-1'
        },
        'xs-xs-bottom': {
          padding: 'pb-1'
        },
        'xs-xs-left': {
          padding: 'pl-2'
        },
        'xs-xs-right': {
          padding: 'pr-2'
        },
        'xs-xs-x-top': {
          padding: 'px-2 pt-1'
        },
        'xs-xs-x-bottom': {
          padding: 'px-2 pb-1'
        },
        'xs-xs-y-left': {
          padding: 'py-1 pl-2'
        },
        'xs-xs-y-right': {
          padding: 'py-1 pr-2'
        },
        'xs-xs-top-left': {
          padding: 'pt-1 pl-2'
        },
        'xs-xs-top-right': {
          padding: 'pt-1 pr-2'
        },
        'xs-xs-bottom-left': {
          padding: 'pb-1 pl-2'
        },
        'xs-xs-bottom-right': {
          padding: 'pb-1 pr-2'
        },
        'sm-sm-x': {
          padding: 'px-4'
        },
        'sm-sm-y': {
          padding: 'py-2'
        },
        'sm-sm-top': {
          padding: 'pt-2'
        },
        'sm-sm-bottom': {
          padding: 'pb-2'
        },
        'sm-sm-left': {
          padding: 'pl-4'
        },
        'sm-sm-right': {
          padding: 'pr-4'
        },
        'sm-sm-x-top': {
          padding: 'px-4 pt-2'
        },
        'sm-sm-x-bottom': {
          padding: 'px-4 pb-2'
        },
        'sm-sm-y-left': {
          padding: 'py-2 pl-4'
        },
        'sm-sm-y-right': {
          padding: 'py-2 pr-4'
        },
        'sm-sm-top-left': {
          padding: 'pt-2 pl-4'
        },
        'sm-sm-top-right': {
          padding: 'pt-2 pr-4'
        },
        'sm-sm-bottom-left': {
          padding: 'pb-2 pl-4'
        },
        'sm-sm-bottom-right': {
          padding: 'pb-2 pr-4'
        },
        'md-md-x': {
          padding: 'px-6'
        },
        'md-md-y': {
          padding: 'py-3'
        },
        'md-md-top': {
          padding: 'pt-3'
        },
        'md-md-bottom': {
          padding: 'pb-3'
        },
        'md-md-left': {
          padding: 'pl-6'
        },
        'md-md-right': {
          padding: 'pr-6'
        },
        'md-md-x-top': {
          padding: 'px-6 pt-3'
        },
        'md-md-x-bottom': {
          padding: 'px-6 pb-3'
        },
        'md-md-y-left': {
          padding: 'py-3 pl-6'
        },
        'md-md-y-right': {
          padding: 'py-3 pr-6'
        },
        'md-md-top-left': {
          padding: 'pt-3 pl-6'
        },
        'md-md-top-right': {
          padding: 'pt-3 pr-6'
        },
        'md-md-bottom-left': {
          padding: 'pb-3 pl-6'
        },
        'md-md-bottom-right': {
          padding: 'pb-3 pr-6'
        },
        'lg-lg-x': {
          padding: 'px-8'
        },
        'lg-lg-y': {
          padding: 'py-4'
        },
        'lg-lg-top': {
          padding: 'pt-4'
        },
        'lg-lg-bottom': {
          padding: 'pb-4'
        },
        'lg-lg-left': {
          padding: 'pl-8'
        },
        'lg-lg-right': {
          padding: 'pr-8'
        },
        'lg-lg-x-top': {
          padding: 'px-8 pt-4'
        },
        'lg-lg-x-bottom': {
          padding: 'px-8 pb-4'
        },
        'lg-lg-y-left': {
          padding: 'py-4 pl-8'
        },
        'lg-lg-y-right': {
          padding: 'py-4 pr-8'
        },
        'lg-lg-top-left': {
          padding: 'pt-4 pl-8'
        },
        'lg-lg-top-right': {
          padding: 'pt-4 pr-8'
        },
        'lg-lg-bottom-left': {
          padding: 'pb-4 pl-8'
        },
        'lg-lg-bottom-right': {
          padding: 'pb-4 pr-8'
        },
        'xl-xl-x': {
          padding: 'px-12'
        },
        'xl-xl-y': {
          padding: 'py-6'
        },
        'xl-xl-top': {
          padding: 'pt-6'
        },
        'xl-xl-bottom': {
          padding: 'pb-6'
        },
        'xl-xl-left': {
          padding: 'pl-12'
        },
        'xl-xl-right': {
          padding: 'pr-12'
        },
        'xl-xl-x-top': {
          padding: 'px-12 pt-6'
        },
        'xl-xl-x-bottom': {
          padding: 'px-12 pb-6'
        },
        'xl-xl-y-left': {
          padding: 'py-6 pl-12'
        },
        'xl-xl-y-right': {
          padding: 'py-6 pr-12'
        },
        'xl-xl-top-left': {
          padding: 'pt-6 pl-12'
        },
        'xl-xl-top-right': {
          padding: 'pt-6 pr-12'
        },
        'xl-xl-bottom-left': {
          padding: 'pb-6 pl-12'
        },
        'xl-xl-bottom-right': {
          padding: 'pb-6 pr-12'
        },
        'xxl-xxl-x': {
          padding: 'px-16'
        },
        'xxl-xxl-y': {
          padding: 'py-16'
        },
        'xxl-xxl-top': {
          padding: 'pt-16'
        },
        'xxl-xxl-bottom': {
          padding: 'pb-16'
        },
        'xxl-xxl-left': {
          padding: 'pl-16'
        },
        'xxl-xxl-right': {
          padding: 'pr-16'
        },
        'xxl-xxl-x-top': {
          padding: 'px-16 pt-16'
        },
        'xxl-xxl-x-bottom': {
          padding: 'px-16 pb-16'
        },
        'xxl-xxl-y-left': {
          padding: 'py-16 pl-16'
        },
        'xxl-xxl-y-right': {
          padding: 'py-16 pr-16'
        },
        'xxl-xxl-top-left': {
          padding: 'pt-16 pl-16'
        },
        'xxl-xxl-top-right': {
          padding: 'pt-16 pr-16'
        },
        'xxl-xxl-bottom-left': {
          padding: 'pb-16 pl-16'
        },
        'xxl-xxl-bottom-right': {
          padding: 'pb-16 pr-16'
        }
      }
    },
    margin: {
      xs: {
        margin: 'm-2'
      },
      sm: {
        margin: 'm-4'
      },
      md: {
        margin: 'm-6'
      },
      lg: {
        margin: 'm-8'
      },
      xl: {
        margin: 'm-12'
      },
      xxl: {
        margin: 'm-16'
      },
      'xs-x': {
        margin: 'mx-2'
      },
      'xs-y': {
        margin: 'my-2'
      },
      'xs-top': {
        margin: 'mt-2'
      },
      'xs-bottom': {
        margin: 'mb-2'
      },
      'xs-left': {
        margin: 'ml-2'
      },
      'xs-right': {
        margin: 'mr-2'
      },
      'xs-x-top': {
        margin: 'mx-2 mt-2'
      },
      'xs-x-bottom': {
        margin: 'mx-2 mb-2'
      },
      'xs-y-left': {
        margin: 'my-2 ml-2'
      },
      'xs-y-right': {
        margin: 'my-2 mr-2'
      },
      'xs-top-left': {
        margin: 'mt-2 ml-2'
      },
      'xs-top-right': {
        margin: 'mt-2 mr-2'
      },
      'xs-bottom-left': {
        margin: 'mb-2 ml-2'
      },
      'xs-bottom-right': {
        margin: 'mb-2 mr-2'
      },
      'sm-x': {
        margin: 'mx-4'
      },
      'sm-y': {
        margin: 'my-4'
      },
      'sm-top': {
        margin: 'mt-4'
      },
      'sm-bottom': {
        margin: 'mb-4'
      },
      'sm-left': {
        margin: 'ml-4'
      },
      'sm-right': {
        margin: 'mr-4'
      },
      'sm-x-top': {
        margin: 'mx-4 mt-4'
      },
      'sm-x-bottom': {
        margin: 'mx-4 mb-4'
      },
      'sm-y-left': {
        margin: 'my-4 ml-4'
      },
      'sm-y-right': {
        margin: 'my-4 mr-4'
      },
      'sm-top-left': {
        margin: 'mt-4 ml-4'
      },
      'sm-top-right': {
        margin: 'mt-4 mr-4'
      },
      'sm-bottom-left': {
        margin: 'mb-4 ml-4'
      },
      'sm-bottom-right': {
        margin: 'mb-4 mr-4'
      },
      'md-x': {
        margin: 'mx-6'
      },
      'md-y': {
        margin: 'my-6'
      },
      'md-top': {
        margin: 'mt-6'
      },
      'md-bottom': {
        margin: 'mb-6'
      },
      'md-left': {
        margin: 'ml-6'
      },
      'md-right': {
        margin: 'mr-6'
      },
      'md-x-top': {
        margin: 'mx-6 mt-6'
      },
      'md-x-bottom': {
        margin: 'mx-6 mb-6'
      },
      'md-y-left': {
        margin: 'my-6 ml-6'
      },
      'md-y-right': {
        margin: 'my-6 mr-6'
      },
      'md-top-left': {
        margin: 'mt-6 ml-6'
      },
      'md-top-right': {
        margin: 'mt-6 mr-6'
      },
      'md-bottom-left': {
        margin: 'mb-6 ml-6'
      },
      'md-bottom-right': {
        margin: 'mb-6 mr-6'
      },
      'lg-x': {
        margin: 'mx-8'
      },
      'lg-y': {
        margin: 'my-8'
      },
      'lg-top': {
        margin: 'mt-8'
      },
      'lg-bottom': {
        margin: 'mb-8'
      },
      'lg-left': {
        margin: 'ml-8'
      },
      'lg-right': {
        margin: 'mr-8'
      },
      'lg-x-top': {
        margin: 'mx-8 mt-8'
      },
      'lg-x-bottom': {
        margin: 'mx-8 mb-8'
      },
      'lg-y-left': {
        margin: 'my-8 ml-8'
      },
      'lg-y-right': {
        margin: 'my-8 mr-8'
      },
      'lg-top-left': {
        margin: 'mt-8 ml-8'
      },
      'lg-top-right': {
        margin: 'mt-8 mr-8'
      },
      'lg-bottom-left': {
        margin: 'mb-8 ml-8'
      },
      'lg-bottom-right': {
        margin: 'mb-8 mr-8'
      },
      'xl-x': {
        margin: 'mx-12'
      },
      'xl-y': {
        margin: 'my-12'
      },
      'xl-top': {
        margin: 'mt-12'
      },
      'xl-bottom': {
        margin: 'mb-12'
      },
      'xl-left': {
        margin: 'ml-12'
      },
      'xl-right': {
        margin: 'mr-12'
      },
      'xl-x-top': {
        margin: 'mx-12 mt-12'
      },
      'xl-x-bottom': {
        margin: 'mx-12 mb-12'
      },
      'xl-y-left': {
        margin: 'my-12 ml-12'
      },
      'xl-y-right': {
        margin: 'my-12 mr-12'
      },
      'xl-top-left': {
        margin: 'mt-12 ml-12'
      },
      'xl-top-right': {
        margin: 'mt-12 mr-12'
      },
      'xl-bottom-left': {
        margin: 'mb-12 ml-12'
      },
      'xl-bottom-right': {
        margin: 'mb-12 mr-12'
      },
      'xxl-x': {
        margin: 'mx-16'
      },
      'xxl-y': {
        margin: 'my-16'
      },
      'xxl-top': {
        margin: 'mt-16'
      },
      'xxl-bottom': {
        margin: 'mb-16'
      },
      'xxl-left': {
        margin: 'ml-16'
      },
      'xxl-right': {
        margin: 'mr-16'
      },
      'xxl-x-top': {
        margin: 'mx-16 mt-16'
      },
      'xxl-x-bottom': {
        margin: 'mx-16 mb-16'
      },
      'xxl-y-left': {
        margin: 'my-16 ml-16'
      },
      'xxl-y-right': {
        margin: 'my-16 mr-16'
      },
      'xxl-top-left': {
        margin: 'mt-16 ml-16'
      },
      'xxl-top-right': {
        margin: 'mt-16 mr-16'
      },
      'xxl-bottom-left': {
        margin: 'mb-16 ml-16'
      },
      'xxl-bottom-right': {
        margin: 'mb-16 mr-16'
      }
    },
    border: {
      all: {
        borderWidth: 'border'
      },
      x: {
        borderWidth: 'border-x'
      },
      y: {
        borderWidth: 'border-y'
      },
      top: {
        borderWidth: 'border-t'
      },
      bottom: {
        borderWidth: 'border-b'
      },
      left: {
        borderWidth: 'border-l'
      },
      right: {
        borderWidth: 'border-r'
      },
      'x-top': {
        borderWidth: 'border-x border-t'
      },
      'x-bottom': {
        borderWidth: 'border-x border-b'
      },
      'y-left': {
        borderWidth: 'border-y border-l'
      },
      'y-right': {
        borderWidth: 'border-y border-r'
      },
      'top-left': {
        borderWidth: 'border-t border-l'
      },
      'top-right': {
        borderWidth: 'border-t border-r'
      },
      'bottom-left': {
        borderWidth: 'border-b border-l'
      },
      'bottom-right': {
        borderWidth: 'border-b border-r'
      }
    },
    radius: {
      xs: {
        borderRadius: 'rounded-sm'
      },
      sm: {
        borderRadius: 'rounded-md'
      },
      md: {
        borderRadius: 'rounded-lg'
      },
      lg: {
        borderRadius: 'rounded-xl'
      },
      xl: {
        borderRadius: 'rounded-2xl'
      },
      xxl: {
        borderRadius: 'rounded-3xl'
      },
      full: {
        borderRadius: 'rounded-full'
      },
      'xs-top': {
        borderRadius: 'rounded-t-sm'
      },
      'xs-bottom': {
        borderRadius: 'rounded-b-sm'
      },
      'xs-left': {
        borderRadius: 'rounded-l-sm'
      },
      'xs-right': {
        borderRadius: 'rounded-r-sm'
      },
      'xs-top-left': {
        borderRadius: 'rounded-tl-sm'
      },
      'xs-top-right': {
        borderRadius: 'rounded-tr-sm'
      },
      'xs-bottom-left': {
        borderRadius: 'rounded-bl-sm'
      },
      'xs-bottom-right': {
        borderRadius: 'rounded-br'
      },
      'sm-top': {
        borderRadius: 'rounded-t-md'
      },
      'sm-bottom': {
        borderRadius: 'rounded-b-md'
      },
      'sm-left': {
        borderRadius: 'rounded-l-md'
      },
      'sm-right': {
        borderRadius: 'rounded-r-md'
      },
      'sm-top-left': {
        borderRadius: 'rounded-tl-md'
      },
      'sm-top-right': {
        borderRadius: 'rounded-tr-md'
      },
      'sm-bottom-left': {
        borderRadius: 'rounded-bl-md'
      },
      'sm-bottom-right': {
        borderRadius: 'rounded-br-md'
      },
      'md-top': {
        borderRadius: 'rounded-t-lg'
      },
      'md-bottom': {
        borderRadius: 'rounded-b-lg'
      },
      'md-left': {
        borderRadius: 'rounded-l-lg'
      },
      'md-right': {
        borderRadius: 'rounded-r-lg'
      },
      'md-top-left': {
        borderRadius: 'rounded-tl-lg'
      },
      'md-top-right': {
        borderRadius: 'rounded-tr-lg'
      },
      'md-bottom-left': {
        borderRadius: 'rounded-bl-lg'
      },
      'md-bottom-right': {
        borderRadius: 'rounded-br-lg'
      },
      'lg-top': {
        borderRadius: 'rounded-t-xl'
      },
      'lg-bottom': {
        borderRadius: 'rounded-b-xl'
      },
      'lg-left': {
        borderRadius: 'rounded-l-xl'
      },
      'lg-right': {
        borderRadius: 'rounded-r-xl'
      },
      'lg-top-left': {
        borderRadius: 'rounded-tl-xl'
      },
      'lg-top-right': {
        borderRadius: 'rounded-tr-xl'
      },
      'lg-bottom-left': {
        borderRadius: 'rounded-bl-xl'
      },
      'lg-bottom-right': {
        borderRadius: 'rounded-br-xl'
      },
      'xl-top': {
        borderRadius: 'rounded-t-2xl'
      },
      'xl-bottom': {
        borderRadius: 'rounded-b-2xl'
      },
      'xl-left': {
        borderRadius: 'rounded-l-2xl'
      },
      'xl-right': {
        borderRadius: 'rounded-r-2xl'
      },
      'xl-top-left': {
        borderRadius: 'rounded-tl-2xl'
      },
      'xl-top-right': {
        borderRadius: 'rounded-tr-2xl'
      },
      'xl-bottom-left': {
        borderRadius: 'rounded-bl-2xl'
      },
      'xl-bottom-right': {
        borderRadius: 'rounded-br-2xl'
      },
      'xxl-top': {
        borderRadius: 'rounded-t-3xl'
      },
      'xxl-bottom': {
        borderRadius: 'rounded-b-3xl'
      },
      'xxl-left': {
        borderRadius: 'rounded-l-3xl'
      },
      'xxl-right': {
        borderRadius: 'rounded-r-3xl'
      },
      'xxl-top-left': {
        borderRadius: 'rounded-tl-3xl'
      },
      'xxl-top-right': {
        borderRadius: 'rounded-tr-3xl'
      },
      'xxl-bottom-left': {
        borderRadius: 'rounded-bl-3xl'
      },
      'xxl-bottom-right': {
        borderRadius: 'rounded-br-3xl'
      },
      'full-top': {
        borderRadius: 'rounded-t-full'
      },
      'full-bottom': {
        borderRadius: 'rounded-b-full'
      },
      'full-left': {
        borderRadius: 'rounded-l-full'
      },
      'full-right': {
        borderRadius: 'rounded-r-full'
      },
      'full-top-left': {
        borderRadius: 'rounded-tl-full'
      },
      'full-top-right': {
        borderRadius: 'rounded-tr-full'
      },
      'full-bottom-left': {
        borderRadius: 'rounded-bl-full'
      },
      'full-bottom-right': {
        borderRadius: 'rounded-br-full'
      }
    },
    weight: {
      semi: {
        font: 'font-semibold'
      },
      bold: {
        font: 'font-bold'
      }
    },
    underline: {
      none: {
        textDecoration: 'no-underline'
      },
      hover: {
        textDecoration: 'hover:underline'
      },
      always: {
        textDecoration: 'underline'
      }
    },
    wordBreak: {
      words: {
        wordBreak: 'break-words'
      },
      all: {
        wordBreak: 'break-all'
      },
      keep: {
        wordBreak: 'break-keep'
      }
    },
    textWrap: {
      nowrap: {
        textWrap: 'text-nowrap'
      },
      balance: {
        textWrap: 'text-balance'
      },
      pretty: {
        textWrap: 'text-pretty'
      }
    },
    textAlign: {
      center: {
        textAlign: 'text-center'
      },
      right: {
        textAlign: 'text-right'
      },
      justify: {
        textAlign: 'text-justify'
      }
    },
    textOverflow: {
      truncate: {
        textOverflow: 'truncate'
      },
      ellipsis: {
        textOverflow: 'text-ellipsis'
      }
    },
    color: {
      bg: {
        light: {
          disabled: {
            default: {
              color: 'bg-disabled-500'
            },
            light: {
              color: 'bg-disabled-300'
            },
            on: {
              color: 'bg-disabled-50'
            }
          },
          surface: {
            default: {
              color: 'bg-surface-500'
            },
            light: {
              color: 'bg-surface-300'
            },
            on: {
              color: 'bg-surface-50'
            }
          },
          neutral: {
            default: {
              color: 'bg-neutral-500'
            },
            light: {
              color: 'bg-neutral-300'
            },
            on: {
              color: 'bg-neutral-50'
            }
          },
          primary: {
            default: {
              color: 'bg-primary-500'
            },
            light: {
              color: 'bg-primary-300'
            },
            on: {
              color: 'bg-primary-50'
            }
          },
          secondary: {
            default: {
              color: 'bg-secondary-500'
            },
            light: {
              color: 'bg-secondary-300'
            },
            on: {
              color: 'bg-secondary-50'
            }
          },
          tertiary: {
            default: {
              color: 'bg-tertiary-500'
            },
            light: {
              color: 'bg-tertiary-300'
            },
            on: {
              color: 'bg-tertiary-50'
            }
          },
          success: {
            default: {
              color: 'bg-success-500'
            },
            light: {
              color: 'bg-success-300'
            },
            on: {
              color: 'bg-success-50'
            }
          },
          warning: {
            default: {
              color: 'bg-warning-500'
            },
            light: {
              color: 'bg-warning-300'
            },
            on: {
              color: 'bg-warning-50'
            }
          },
          error: {
            default: {
              color: 'bg-error-500'
            },
            light: {
              color: 'bg-error-300'
            },
            on: {
              color: 'bg-error-50'
            }
          }
        },
        dark: {
          disabled: {
            default: {
              color: 'bg-disabled-600'
            },
            light: {
              color: 'bg-disabled-400'
            },
            on: {
              color: 'bg-disabled-100'
            }
          },
          surface: {
            default: {
              color: 'bg-surface-600'
            },
            light: {
              color: 'bg-surface-400'
            },
            on: {
              color: 'bg-surface-100'
            }
          },
          neutral: {
            default: {
              color: 'bg-neutral-600'
            },
            light: {
              color: 'bg-neutral-400'
            },
            on: {
              color: 'bg-neutral-100'
            }
          },
          primary: {
            default: {
              color: 'bg-primary-600'
            },
            light: {
              color: 'bg-primary-400'
            },
            on: {
              color: 'bg-primary-100'
            }
          },
          secondary: {
            default: {
              color: 'bg-secondary-600'
            },
            light: {
              color: 'bg-secondary-400'
            },
            on: {
              color: 'bg-secondary-100'
            }
          },
          tertiary: {
            default: {
              color: 'bg-tertiary-600'
            },
            light: {
              color: 'bg-tertiary-400'
            },
            on: {
              color: 'bg-tertiary-100'
            }
          },
          success: {
            default: {
              color: 'bg-success-600'
            },
            light: {
              color: 'bg-success-400'
            },
            on: {
              color: 'bg-success-100'
            }
          },
          warning: {
            default: {
              color: 'bg-warning-600'
            },
            light: {
              color: 'bg-warning-400'
            },
            on: {
              color: 'bg-warning-100'
            }
          },
          error: {
            default: {
              color: 'bg-error-600'
            },
            light: {
              color: 'bg-error-400'
            },
            on: {
              color: 'bg-error-100'
            }
          }
        }
      },
      border: {
        light: {
          disabled: {
            default: {
              color: 'border-disabled-500'
            },
            light: {
              color: 'border-disabled-300'
            },
            on: {
              color: 'border-disabled-50'
            }
          },
          surface: {
            default: {
              color: 'border-surface-500'
            },
            light: {
              color: 'border-surface-300'
            },
            on: {
              color: 'border-surface-50'
            }
          },
          neutral: {
            default: {
              color: 'border-neutral-500'
            },
            light: {
              color: 'border-neutral-300'
            },
            on: {
              color: 'border-neutral-50'
            }
          },
          primary: {
            default: {
              color: 'border-primary-500'
            },
            light: {
              color: 'border-primary-300'
            },
            on: {
              color: 'border-primary-50'
            }
          },
          secondary: {
            default: {
              color: 'border-secondary-500'
            },
            light: {
              color: 'border-secondary-300'
            },
            on: {
              color: 'border-secondary-50'
            }
          },
          tertiary: {
            default: {
              color: 'border-tertiary-500'
            },
            light: {
              color: 'border-tertiary-300'
            },
            on: {
              color: 'border-tertiary-50'
            }
          },
          success: {
            default: {
              color: 'border-success-500'
            },
            light: {
              color: 'border-success-300'
            },
            on: {
              color: 'border-success-50'
            }
          },
          warning: {
            default: {
              color: 'border-warning-500'
            },
            light: {
              color: 'border-warning-300'
            },
            on: {
              color: 'border-warning-50'
            }
          },
          error: {
            default: {
              color: 'border-error-500'
            },
            light: {
              color: 'border-error-300'
            },
            on: {
              color: 'border-error-50'
            }
          }
        },
        dark: {
          disabled: {
            default: {
              color: 'border-disabled-600'
            },
            light: {
              color: 'border-disabled-400'
            },
            on: {
              color: 'border-disabled-100'
            }
          },
          surface: {
            default: {
              color: 'border-surface-600'
            },
            light: {
              color: 'border-surface-400'
            },
            on: {
              color: 'border-surface-100'
            }
          },
          neutral: {
            default: {
              color: 'border-neutral-600'
            },
            light: {
              color: 'border-neutral-400'
            },
            on: {
              color: 'border-neutral-100'
            }
          },
          primary: {
            default: {
              color: 'border-primary-600'
            },
            light: {
              color: 'border-primary-400'
            },
            on: {
              color: 'border-primary-100'
            }
          },
          secondary: {
            default: {
              color: 'border-secondary-600'
            },
            light: {
              color: 'border-secondary-400'
            },
            on: {
              color: 'border-secondary-100'
            }
          },
          tertiary: {
            default: {
              color: 'border-tertiary-600'
            },
            light: {
              color: 'border-tertiary-400'
            },
            on: {
              color: 'border-tertiary-100'
            }
          },
          success: {
            default: {
              color: 'border-success-600'
            },
            light: {
              color: 'border-success-400'
            },
            on: {
              color: 'border-success-100'
            }
          },
          warning: {
            default: {
              color: 'border-warning-600'
            },
            light: {
              color: 'border-warning-400'
            },
            on: {
              color: 'border-warning-100'
            }
          },
          error: {
            default: {
              color: 'border-error-600'
            },
            light: {
              color: 'border-error-400'
            },
            on: {
              color: 'border-error-100'
            }
          }
        }
      },
      text: {
        light: {
          disabled: {
            default: {
              color: 'text-disabled-500'
            },
            light: {
              color: 'text-disabled-300'
            },
            on: {
              color: 'text-disabled-50'
            }
          },
          surface: {
            default: {
              color: 'text-surface-500'
            },
            light: {
              color: 'text-surface-300'
            },
            on: {
              color: 'text-surface-50'
            }
          },
          neutral: {
            default: {
              color: 'text-neutral-500'
            },
            light: {
              color: 'text-neutral-300'
            },
            on: {
              color: 'text-neutral-50'
            }
          },
          primary: {
            default: {
              color: 'text-primary-500'
            },
            light: {
              color: 'text-primary-300'
            },
            on: {
              color: 'text-primary-50'
            }
          },
          secondary: {
            default: {
              color: 'text-secondary-500'
            },
            light: {
              color: 'text-secondary-300'
            },
            on: {
              color: 'text-secondary-50'
            }
          },
          tertiary: {
            default: {
              color: 'text-tertiary-500'
            },
            light: {
              color: 'text-tertiary-300'
            },
            on: {
              color: 'text-tertiary-50'
            }
          },
          success: {
            default: {
              color: 'text-success-500'
            },
            light: {
              color: 'text-success-300'
            },
            on: {
              color: 'text-success-50'
            }
          },
          warning: {
            default: {
              color: 'text-warning-500'
            },
            light: {
              color: 'text-warning-300'
            },
            on: {
              color: 'text-warning-50'
            }
          },
          error: {
            default: {
              color: 'text-error-500'
            },
            light: {
              color: 'text-error-300'
            },
            on: {
              color: 'text-error-50'
            }
          }
        },
        dark: {
          disabled: {
            default: {
              color: 'text-disabled-600'
            },
            light: {
              color: 'text-disabled-400'
            },
            on: {
              color: 'text-disabled-100'
            }
          },
          surface: {
            default: {
              color: 'text-surface-600'
            },
            light: {
              color: 'text-surface-400'
            },
            on: {
              color: 'text-surface-100'
            }
          },
          neutral: {
            default: {
              color: 'text-neutral-600'
            },
            light: {
              color: 'text-neutral-400'
            },
            on: {
              color: 'text-neutral-100'
            }
          },
          primary: {
            default: {
              color: 'text-primary-600'
            },
            light: {
              color: 'text-primary-400'
            },
            on: {
              color: 'text-primary-100'
            }
          },
          secondary: {
            default: {
              color: 'text-secondary-600'
            },
            light: {
              color: 'text-secondary-400'
            },
            on: {
              color: 'text-secondary-100'
            }
          },
          tertiary: {
            default: {
              color: 'text-tertiary-600'
            },
            light: {
              color: 'text-tertiary-400'
            },
            on: {
              color: 'text-tertiary-100'
            }
          },
          success: {
            default: {
              color: 'text-success-600'
            },
            light: {
              color: 'text-success-400'
            },
            on: {
              color: 'text-success-100'
            }
          },
          warning: {
            default: {
              color: 'text-warning-600'
            },
            light: {
              color: 'text-warning-400'
            },
            on: {
              color: 'text-warning-100'
            }
          },
          error: {
            default: {
              color: 'text-error-600'
            },
            light: {
              color: 'text-error-400'
            },
            on: {
              color: 'text-error-100'
            }
          }
        }
      },
      fill: {
        light: {
          disabled: {
            default: {
              color: 'fill-disabled-500'
            },
            light: {
              color: 'fill-disabled-300'
            },
            on: {
              color: 'fill-disabled-50'
            }
          },
          surface: {
            default: {
              color: 'fill-surface-500'
            },
            light: {
              color: 'fill-surface-300'
            },
            on: {
              color: 'fill-surface-50'
            }
          },
          neutral: {
            default: {
              color: 'fill-neutral-500'
            },
            light: {
              color: 'fill-neutral-300'
            },
            on: {
              color: 'fill-neutral-50'
            }
          },
          primary: {
            default: {
              color: 'fill-primary-500'
            },
            light: {
              color: 'fill-primary-300'
            },
            on: {
              color: 'fill-primary-50'
            }
          },
          secondary: {
            default: {
              color: 'fill-secondary-500'
            },
            light: {
              color: 'fill-secondary-300'
            },
            on: {
              color: 'fill-secondary-50'
            }
          },
          tertiary: {
            default: {
              color: 'fill-tertiary-500'
            },
            light: {
              color: 'fill-tertiary-300'
            },
            on: {
              color: 'fill-tertiary-50'
            }
          },
          success: {
            default: {
              color: 'fill-success-500'
            },
            light: {
              color: 'fill-success-300'
            },
            on: {
              color: 'fill-success-50'
            }
          },
          warning: {
            default: {
              color: 'fill-warning-500'
            },
            light: {
              color: 'fill-warning-300'
            },
            on: {
              color: 'fill-warning-50'
            }
          },
          error: {
            default: {
              color: 'fill-error-500'
            },
            light: {
              color: 'fill-error-300'
            },
            on: {
              color: 'fill-error-50'
            }
          }
        },
        dark: {
          disabled: {
            default: {
              color: 'fill-disabled-600'
            },
            light: {
              color: 'fill-disabled-400'
            },
            on: {
              color: 'fill-disabled-100'
            }
          },
          surface: {
            default: {
              color: 'fill-surface-600'
            },
            light: {
              color: 'fill-surface-400'
            },
            on: {
              color: 'fill-surface-100'
            }
          },
          neutral: {
            default: {
              color: 'fill-neutral-600'
            },
            light: {
              color: 'fill-neutral-400'
            },
            on: {
              color: 'fill-neutral-100'
            }
          },
          primary: {
            default: {
              color: 'fill-primary-600'
            },
            light: {
              color: 'fill-primary-400'
            },
            on: {
              color: 'fill-primary-100'
            }
          },
          secondary: {
            default: {
              color: 'fill-secondary-600'
            },
            light: {
              color: 'fill-secondary-400'
            },
            on: {
              color: 'fill-secondary-100'
            }
          },
          tertiary: {
            default: {
              color: 'fill-tertiary-600'
            },
            light: {
              color: 'fill-tertiary-400'
            },
            on: {
              color: 'fill-tertiary-100'
            }
          },
          success: {
            default: {
              color: 'fill-success-600'
            },
            light: {
              color: 'fill-success-400'
            },
            on: {
              color: 'fill-success-100'
            }
          },
          warning: {
            default: {
              color: 'fill-warning-600'
            },
            light: {
              color: 'fill-warning-400'
            },
            on: {
              color: 'fill-warning-100'
            }
          },
          error: {
            default: {
              color: 'fill-error-600'
            },
            light: {
              color: 'fill-error-400'
            },
            on: {
              color: 'fill-error-100'
            }
          }
        }
      },
      stroke: {
        light: {
          disabled: {
            default: {
              color: 'stroke-disabled-500'
            },
            light: {
              color: 'stroke-disabled-300'
            },
            on: {
              color: 'stroke-disabled-50'
            }
          },
          surface: {
            default: {
              color: 'stroke-surface-500'
            },
            light: {
              color: 'stroke-surface-300'
            },
            on: {
              color: 'stroke-surface-50'
            }
          },
          neutral: {
            default: {
              color: 'stroke-neutral-500'
            },
            light: {
              color: 'stroke-neutral-300'
            },
            on: {
              color: 'stroke-neutral-50'
            }
          },
          primary: {
            default: {
              color: 'stroke-primary-500'
            },
            light: {
              color: 'stroke-primary-300'
            },
            on: {
              color: 'stroke-primary-50'
            }
          },
          secondary: {
            default: {
              color: 'stroke-secondary-500'
            },
            light: {
              color: 'stroke-secondary-300'
            },
            on: {
              color: 'stroke-secondary-50'
            }
          },
          tertiary: {
            default: {
              color: 'stroke-tertiary-500'
            },
            light: {
              color: 'stroke-tertiary-300'
            },
            on: {
              color: 'stroke-tertiary-50'
            }
          },
          success: {
            default: {
              color: 'stroke-success-500'
            },
            light: {
              color: 'stroke-success-300'
            },
            on: {
              color: 'stroke-success-50'
            }
          },
          warning: {
            default: {
              color: 'stroke-warning-500'
            },
            light: {
              color: 'stroke-warning-300'
            },
            on: {
              color: 'stroke-warning-50'
            }
          },
          error: {
            default: {
              color: 'stroke-error-500'
            },
            light: {
              color: 'stroke-error-300'
            },
            on: {
              color: 'stroke-error-50'
            }
          }
        },
        dark: {
          disabled: {
            default: {
              color: 'stroke-disabled-600'
            },
            light: {
              color: 'stroke-disabled-400'
            },
            on: {
              color: 'stroke-disabled-100'
            }
          },
          surface: {
            default: {
              color: 'stroke-surface-600'
            },
            light: {
              color: 'stroke-surface-400'
            },
            on: {
              color: 'stroke-surface-100'
            }
          },
          neutral: {
            default: {
              color: 'stroke-neutral-600'
            },
            light: {
              color: 'stroke-neutral-400'
            },
            on: {
              color: 'stroke-neutral-100'
            }
          },
          primary: {
            default: {
              color: 'stroke-primary-600'
            },
            light: {
              color: 'stroke-primary-400'
            },
            on: {
              color: 'stroke-primary-100'
            }
          },
          secondary: {
            default: {
              color: 'stroke-secondary-600'
            },
            light: {
              color: 'stroke-secondary-400'
            },
            on: {
              color: 'stroke-secondary-100'
            }
          },
          tertiary: {
            default: {
              color: 'stroke-tertiary-600'
            },
            light: {
              color: 'stroke-tertiary-400'
            },
            on: {
              color: 'stroke-tertiary-100'
            }
          },
          success: {
            default: {
              color: 'stroke-success-600'
            },
            light: {
              color: 'stroke-success-400'
            },
            on: {
              color: 'stroke-success-100'
            }
          },
          warning: {
            default: {
              color: 'stroke-warning-600'
            },
            light: {
              color: 'stroke-warning-400'
            },
            on: {
              color: 'stroke-warning-100'
            }
          },
          error: {
            default: {
              color: 'stroke-error-600'
            },
            light: {
              color: 'stroke-error-400'
            },
            on: {
              color: 'stroke-error-100'
            }
          }
        }
      },
      ring: {
        light: {
          disabled: {
            default: {
              color: 'ring-disabled-500'
            },
            light: {
              color: 'ring-disabled-300'
            },
            on: {
              color: 'ring-disabled-50'
            }
          },
          surface: {
            default: {
              color: 'ring-surface-500'
            },
            light: {
              color: 'ring-surface-300'
            },
            on: {
              color: 'ring-surface-50'
            }
          },
          neutral: {
            default: {
              color: 'ring-neutral-500'
            },
            light: {
              color: 'ring-neutral-300'
            },
            on: {
              color: 'ring-neutral-50'
            }
          },
          primary: {
            default: {
              color: 'ring-primary-500'
            },
            light: {
              color: 'ring-primary-300'
            },
            on: {
              color: 'ring-primary-50'
            }
          },
          secondary: {
            default: {
              color: 'ring-secondary-500'
            },
            light: {
              color: 'ring-secondary-300'
            },
            on: {
              color: 'ring-secondary-50'
            }
          },
          tertiary: {
            default: {
              color: 'ring-tertiary-500'
            },
            light: {
              color: 'ring-tertiary-300'
            },
            on: {
              color: 'ring-tertiary-50'
            }
          },
          success: {
            default: {
              color: 'ring-success-500'
            },
            light: {
              color: 'ring-success-300'
            },
            on: {
              color: 'ring-success-50'
            }
          },
          warning: {
            default: {
              color: 'ring-warning-500'
            },
            light: {
              color: 'ring-warning-300'
            },
            on: {
              color: 'ring-warning-50'
            }
          },
          error: {
            default: {
              color: 'ring-error-500'
            },
            light: {
              color: 'ring-error-300'
            },
            on: {
              color: 'ring-error-50'
            }
          }
        },
        dark: {
          disabled: {
            default: {
              color: 'ring-disabled-600'
            },
            light: {
              color: 'ring-disabled-400'
            },
            on: {
              color: 'ring-disabled-100'
            }
          },
          surface: {
            default: {
              color: 'ring-surface-600'
            },
            light: {
              color: 'ring-surface-400'
            },
            on: {
              color: 'ring-surface-100'
            }
          },
          neutral: {
            default: {
              color: 'ring-neutral-600'
            },
            light: {
              color: 'ring-neutral-400'
            },
            on: {
              color: 'ring-neutral-100'
            }
          },
          primary: {
            default: {
              color: 'ring-primary-600'
            },
            light: {
              color: 'ring-primary-400'
            },
            on: {
              color: 'ring-primary-100'
            }
          },
          secondary: {
            default: {
              color: 'ring-secondary-600'
            },
            light: {
              color: 'ring-secondary-400'
            },
            on: {
              color: 'ring-secondary-100'
            }
          },
          tertiary: {
            default: {
              color: 'ring-tertiary-600'
            },
            light: {
              color: 'ring-tertiary-400'
            },
            on: {
              color: 'ring-tertiary-100'
            }
          },
          success: {
            default: {
              color: 'ring-success-600'
            },
            light: {
              color: 'ring-success-400'
            },
            on: {
              color: 'ring-success-100'
            }
          },
          warning: {
            default: {
              color: 'ring-warning-600'
            },
            light: {
              color: 'ring-warning-400'
            },
            on: {
              color: 'ring-warning-100'
            }
          },
          error: {
            default: {
              color: 'ring-error-600'
            },
            light: {
              color: 'ring-error-400'
            },
            on: {
              color: 'ring-error-100'
            }
          }
        }
      },
      input: {
        light: {
          surface: {
            default: {
              group: '[.focused]:text-surface-500 [.focused]:fill-surface-500'
            },
            on: {
              group: '[.focused]:text-surface-50 [.focused]:fill-surface-50'
            }
          },
          neutral: {
            default: {
              group: '[.focused]:text-neutral-500 [.focused]:fill-neutral-500'
            },
            on: {
              group: '[.focused]:text-neutral-50 [.focused]:fill-neutral-50'
            }
          },
          primary: {
            default: {
              group: '[.focused]:text-primary-500 [.focused]:fill-primary-500'
            },
            on: {
              group: '[.focused]:text-primary-50 [.focused]:fill-primary-50'
            }
          },
          secondary: {
            default: {
              group:
                '[.focused]:text-secondary-500 [.focused]:fill-secondary-500'
            },
            on: {
              group: '[.focused]:text-secondary-50 [.focused]:fill-secondary-50'
            }
          },
          tertiary: {
            default: {
              group: '[.focused]:text-tertiary-500 [.focused]:fill-tertiary-500'
            },
            on: {
              group: '[.focused]:text-tertiary-50 [.focused]:fill-tertiary-50'
            }
          },
          success: {
            default: {
              group: '[.focused]:text-success-500 [.focused]:fill-success-500'
            },
            on: {
              group: '[.focused]:text-success-50 [.focused]:fill-success-50'
            }
          },
          warning: {
            default: {
              group: '[.focused]:text-warning-500 [.focused]:fill-warning-500'
            },
            on: {
              group: '[.focused]:text-warning-50 [.focused]:fill-warning-50'
            }
          },
          error: {
            default: {
              group: '[.focused]:text-error-500 [.focused]:fill-error-500'
            },
            on: {
              group: '[.focused]:text-error-50 [.focused]:fill-error-50'
            }
          }
        },
        dark: {
          surface: {
            default: {
              group: '[.focused]:text-surface-600 [.focused]:fill-surface-600'
            },
            on: {
              group: '[.focused]:text-surface-100 [.focused]:fill-surface-100'
            }
          },
          neutral: {
            default: {
              group: '[.focused]:text-neutral-600 [.focused]:fill-neutral-600'
            },
            on: {
              group: '[.focused]:text-neutral-100 [.focused]:fill-neutral-100'
            }
          },
          primary: {
            default: {
              group: '[.focused]:text-primary-600 [.focused]:fill-primary-600'
            },
            on: {
              group: '[.focused]:text-primary-100 [.focused]:fill-primary-100'
            }
          },
          secondary: {
            default: {
              group:
                '[.focused]:text-secondary-600 [.focused]:fill-secondary-600'
            },
            on: {
              group:
                '[.focused]:text-secondary-100 [.focused]:fill-secondary-100'
            }
          },
          tertiary: {
            default: {
              group: '[.focused]:text-tertiary-600 [.focused]:fill-tertiary-600'
            },
            on: {
              group: '[.focused]:text-tertiary-100 [.focused]:fill-tertiary-100'
            }
          },
          success: {
            default: {
              group: '[.focused]:text-success-600 [.focused]:fill-success-600'
            },
            on: {
              group: '[.focused]:text-success-100 [.focused]:fill-success-100'
            }
          },
          warning: {
            default: {
              group: '[.focused]:text-warning-600 [.focused]:fill-warning-600'
            },
            on: {
              group: '[.focused]:text-warning-100 [.focused]:fill-warning-100'
            }
          },
          error: {
            default: {
              group: '[.focused]:text-error-600 [.focused]:fill-error-600'
            },
            on: {
              group: '[.focused]:text-error-100 [.focused]:fill-error-100'
            }
          }
        }
      }
    },
    direction: {
      col: {
        flexDirection: 'flex-col'
      },
      'row-reverse': {
        flexDirection: 'flex-row-reverse'
      },
      'col-reverse': {
        flexDirection: 'flex-col-reverse'
      }
    },
    flow: {
      col: {
        gridAutoFlow: 'grid-flow-col'
      },
      dense: {
        gridAutoFlow: 'grid-flow-dense'
      },
      'row-dense': {
        gridAutoFlow: 'grid-flow-row-dense'
      },
      'col-dense': {
        gridAutoFlow: 'grid-flow-col-dense'
      }
    },
    wrap: {
      wrap: {
        flexWrap: 'flex-wrap'
      },
      'wrap-reverse': {
        flexWrap: 'flex-wrap-reverse'
      }
    },
    justifyContent: {
      start: {
        justifyContent: 'justify-start'
      },
      center: {
        justifyContent: 'justify-center'
      },
      end: {
        justifyContent: 'justify-end'
      },
      between: {
        justifyContent: 'justify-between'
      },
      around: {
        justifyContent: 'justify-around'
      },
      evenly: {
        justifyContent: 'justify-evenly'
      },
      stretch: {
        justifyContent: 'justify-stretch'
      }
    },
    alignContent: {
      start: {
        alignContent: 'content-start'
      },
      center: {
        alignContent: 'content-center'
      },
      end: {
        alignContent: 'content-end'
      },
      between: {
        alignContent: 'content-between'
      },
      around: {
        alignContent: 'content-around'
      },
      evenly: {
        alignContent: 'content-evenly'
      },
      stretch: {
        alignContent: 'content-stretch'
      },
      baseline: {
        alignContent: 'content-baseline'
      }
    },
    justifyItems: {
      start: {
        justifyItems: 'justify-items-start'
      },
      center: {
        justifyItems: 'justify-items-center'
      },
      end: {
        justifyItems: 'justify-items-end'
      }
    },
    alignItems: {
      start: {
        alignItems: 'items-start'
      },
      center: {
        alignItems: 'items-center'
      },
      end: {
        alignItems: 'items-end'
      },
      baseline: {
        alignItems: 'items-baseline'
      }
    },
    gap: {
      default: {
        xs: {
          gap: 'gap-2'
        },
        sm: {
          gap: 'gap-4'
        },
        md: {
          gap: 'gap-6'
        },
        lg: {
          gap: 'gap-8'
        },
        xl: {
          gap: 'gap-12'
        },
        xxl: {
          gap: 'gap-16'
        }
      },
      col: {
        xs: {
          gap: 'gap-x-2'
        },
        sm: {
          gap: 'gap-x-4'
        },
        md: {
          gap: 'gap-x-6'
        },
        lg: {
          gap: 'gap-x-8'
        },
        xl: {
          gap: 'gap-x-12'
        },
        xxl: {
          gap: 'gap-x-16'
        }
      },
      row: {
        xs: {
          gap: 'gap-y-2'
        },
        sm: {
          gap: 'gap-y-4'
        },
        md: {
          gap: 'gap-y-6'
        },
        lg: {
          gap: 'gap-y-8'
        },
        xl: {
          gap: 'gap-y-12'
        },
        xxl: {
          gap: 'gap-y-16'
        }
      }
    },
    effect: {
      shadow: {
        boxShadow: 'shadow-md',
        transition: 'transition',
        hover: 'hover:shadow-lg',
        active: 'active:shadow-none',
        focus: 'focus:shadow-none',
        focusVisible: 'focus-visible:shadow-none'
      }
    },
    cursor: {
      none: {
        pointerEvents: 'pointer-events-none'
      },
      pointer: {
        cursor: 'cursor-pointer'
      },
      disabled: {
        cursor: 'cursor-not-allowed',
        userSelect: 'select-none'
      }
    }
  }
};
