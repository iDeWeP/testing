import type { CSSStyles, Orientation, Theme } from '../types';

type SizeType = 'normal' | 'square';
type SpacingScale =
  | 'default'
  | 'normal'
  | 'square'
  | 'inner-normal'
  | 'inner-square';
type SpacingType = 'all' | 'x' | 'y' | 't' | 'b' | 'l' | 'r';
type BorderType = 'all' | 'x' | 'y' | 't' | 'b' | 'l' | 'r';
type RadiusType = 'all' | 't' | 'b' | 'l' | 'r' | 'tl' | 'tr' | 'bl' | 'br';
type ColorType = 'bg' | 'border' | 'text' | 'fill' | 'stroke' | 'ring';
type GapType = 'all' | 'x' | 'y';

type SystemCSSStyles = {
  placement: CSSStyles;
  size: {
    normal: Record<SizeType, CSSStyles>;
    text: Record<SizeType, CSSStyles>;
    font: CSSStyles;
  };
  padding: Record<SpacingScale, Record<SpacingType, CSSStyles>>;
  margin: Record<SpacingType, CSSStyles>;
  spacing: Record<Orientation, CSSStyles>;
  border: Record<BorderType, CSSStyles>;
  radius: Record<RadiusType, CSSStyles>;
  color: {
    normal: Record<ColorType, Record<Theme, CSSStyles>>;
    checked: {
      bg: Record<Theme, CSSStyles>;
      border: Record<Theme, CSSStyles>;
      text: Record<Theme, CSSStyles>;
      fill: Record<Theme, CSSStyles>;
      ring: Record<Theme, CSSStyles>;
    };
  };
  shadow: CSSStyles;
  gap: Record<GapType, CSSStyles>;
};

export const systemStyles: SystemCSSStyles = {
  placement: {
    'top-left': {
      top: 'top-0',
      left: 'left-0'
    },
    'top-right': {
      top: 'top-0',
      right: 'right-0'
    },
    'bottom-left': {
      bottom: 'bottom-0',
      left: 'left-0'
    },
    'bottom-right': {
      bottom: 'bottom-0',
      right: 'right-0'
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
        },
        'xs-xs': {
          height: 'h-4'
        },
        'sm-sm': {
          height: 'h-5'
        },
        'md-md': {
          height: 'h-6'
        },
        'lg-lg': {
          height: 'h-7'
        },
        'xl-xl': {
          height: 'h-8'
        },
        'xxl-xxl': {
          height: 'h-9'
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
        },
        'xs-xs': {
          width: 'w-4',
          height: 'h-4'
        },
        'sm-sm': {
          width: 'w-5',
          height: 'h-5'
        },
        'md-md': {
          width: 'w-6',
          height: 'h-6'
        },
        'lg-lg': {
          width: 'w-7',
          height: 'h-7'
        },
        'xl-xl': {
          width: 'w-8',
          height: 'h-8'
        },
        'xxl-xxl': {
          width: 'w-9',
          height: 'h-9'
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
          height: 'h-5'
        },
        lg: {
          height: 'h-6'
        },
        xl: {
          height: 'h-7'
        },
        xxl: {
          height: 'h-8'
        },
        'xs-xs': {
          height: 'h-8'
        },
        'sm-sm': {
          height: 'h-9'
        },
        'md-md': {
          height: 'h-10'
        },
        'lg-lg': {
          height: 'h-11'
        },
        'xl-xl': {
          height: 'h-13'
        },
        'xxl-xxl': {
          height: 'h-15'
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
        },
        'xs-xs': {
          width: 'w-8',
          height: 'h-8'
        },
        'sm-sm': {
          width: 'w-9',
          height: 'h-9'
        },
        'md-md': {
          width: 'w-10',
          height: 'h-10'
        },
        'lg-lg': {
          width: 'w-11',
          height: 'h-11'
        },
        'xl-xl': {
          width: 'w-13',
          height: 'h-13'
        },
        'xxl-xxl': {
          width: 'w-15',
          height: 'h-15'
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
        fontSize: 'text-md'
      },
      lg: {
        fontSize: 'text-lg'
      },
      xl: {
        fontSize: 'text-xl'
      },
      xxl: {
        fontSize: 'text-2xl'
      },
      'xs-xs': {
        fontSize: 'text-2xl'
      },
      'sm-sm': {
        fontSize: 'text-3xl'
      },
      'md-md': {
        fontSize: 'text-4xl'
      },
      'lg-lg': {
        fontSize: 'text-5xl'
      },
      'xl-xl': {
        fontSize: 'text-6xl'
      },
      'xxl-xxl': {
        fontSize: 'text-7xl'
      }
    }
  },
  padding: {
    default: {
      all: {
        none: {
          padding: 'p-0'
        },
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
        'xs-xs': {
          padding: 'p-1'
        },
        'sm-sm': {
          padding: 'p-2'
        },
        'md-md': {
          padding: 'p-3'
        },
        'lg-lg': {
          padding: 'p-4'
        },
        'xl-xl': {
          padding: 'p-6'
        },
        'xxl-xxl': {
          padding: 'p-8'
        }
      },
      x: {
        none: {
          padding: 'px-0'
        },
        xs: {
          padding: 'px-2'
        },
        sm: {
          padding: 'px-4'
        },
        md: {
          padding: 'px-6'
        },
        lg: {
          padding: 'px-8'
        },
        xl: {
          padding: 'px-12'
        },
        xxl: {
          padding: 'px-16'
        },
        'xs-xs': {
          padding: 'px-1'
        },
        'sm-sm': {
          padding: 'px-2'
        },
        'md-md': {
          padding: 'px-3'
        },
        'lg-lg': {
          padding: 'px-4'
        },
        'xl-xl': {
          padding: 'px-6'
        },
        'xxl-xxl': {
          padding: 'px-8'
        }
      },
      y: {
        none: {
          padding: 'py-0'
        },
        xs: {
          padding: 'py-2'
        },
        sm: {
          padding: 'py-4'
        },
        md: {
          padding: 'py-6'
        },
        lg: {
          padding: 'py-8'
        },
        xl: {
          padding: 'py-12'
        },
        xxl: {
          padding: 'py-16'
        },
        'xs-xs': {
          padding: 'py-1'
        },
        'sm-sm': {
          padding: 'py-2'
        },
        'md-md': {
          padding: 'py-3'
        },
        'lg-lg': {
          padding: 'py-4'
        },
        'xl-xl': {
          padding: 'py-6'
        },
        'xxl-xxl': {
          padding: 'py-8'
        }
      },
      t: {
        none: {
          padding: 'pt-0'
        },
        xs: {
          padding: 'pt-2'
        },
        sm: {
          padding: 'pt-4'
        },
        md: {
          padding: 'pt-6'
        },
        lg: {
          padding: 'pt-8'
        },
        xl: {
          padding: 'pt-12'
        },
        xxl: {
          padding: 'pt-16'
        },
        'xs-xs': {
          padding: 'pt-1'
        },
        'sm-sm': {
          padding: 'pt-2'
        },
        'md-md': {
          padding: 'pt-3'
        },
        'lg-lg': {
          padding: 'pt-4'
        },
        'xl-xl': {
          padding: 'pt-6'
        },
        'xxl-xxl': {
          padding: 'pt-8'
        }
      },
      b: {
        none: {
          padding: 'pb-0'
        },
        xs: {
          padding: 'pb-2'
        },
        sm: {
          padding: 'pb-4'
        },
        md: {
          padding: 'pb-6'
        },
        lg: {
          padding: 'pb-8'
        },
        xl: {
          padding: 'pb-12'
        },
        xxl: {
          padding: 'pb-16'
        },
        'xs-xs': {
          padding: 'pb-1'
        },
        'sm-sm': {
          padding: 'pb-2'
        },
        'md-md': {
          padding: 'pb-3'
        },
        'lg-lg': {
          padding: 'pb-4'
        },
        'xl-xl': {
          padding: 'pb-6'
        },
        'xxl-xxl': {
          padding: 'pb-8'
        }
      },
      l: {
        none: {
          padding: 'pl-0'
        },
        xs: {
          padding: 'pl-2'
        },
        sm: {
          padding: 'pl-4'
        },
        md: {
          padding: 'pl-6'
        },
        lg: {
          padding: 'pl-8'
        },
        xl: {
          padding: 'pl-12'
        },
        xxl: {
          padding: 'pl-16'
        },
        'xs-xs': {
          padding: 'pl-1'
        },
        'sm-sm': {
          padding: 'pl-2'
        },
        'md-md': {
          padding: 'pl-3'
        },
        'lg-lg': {
          padding: 'pl-4'
        },
        'xl-xl': {
          padding: 'pl-6'
        },
        'xxl-xxl': {
          padding: 'pl-8'
        }
      },
      r: {
        none: {
          padding: 'pr-0'
        },
        xs: {
          padding: 'pr-2'
        },
        sm: {
          padding: 'pr-4'
        },
        md: {
          padding: 'pr-6'
        },
        lg: {
          padding: 'pr-8'
        },
        xl: {
          padding: 'pr-12'
        },
        xxl: {
          padding: 'pr-16'
        },
        'xs-xs': {
          padding: 'pr-1'
        },
        'sm-sm': {
          padding: 'pr-2'
        },
        'md-md': {
          padding: 'pr-3'
        },
        'lg-lg': {
          padding: 'pr-4'
        },
        'xl-xl': {
          padding: 'pr-6'
        },
        'xxl-xxl': {
          padding: 'pr-8'
        }
      }
    },
    normal: {
      all: {
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
          padding: 'p-12 py-6'
        },
        'xs-xs': {
          padding: 'px-1.75 py-0.75'
        },
        'sm-sm': {
          padding: 'px-3.75 py-1.75'
        },
        'md-md': {
          padding: 'px-4.75 py-2.25'
        },
        'lg-lg': {
          padding: 'px-5.75 py-2.75'
        },
        'xl-xl': {
          padding: 'px-8.75 py-4.25'
        },
        'xxl-xxl': {
          padding: 'px-11.75 py-5.75'
        }
      },
      x: {
        xs: {
          padding: 'px-2'
        },
        sm: {
          padding: 'px-4'
        },
        md: {
          padding: 'px-5'
        },
        lg: {
          padding: 'px-6'
        },
        xl: {
          padding: 'px-9'
        },
        xxl: {
          padding: 'px-12'
        },
        'xs-xs': {
          padding: 'px-1.75'
        },
        'sm-sm': {
          padding: 'px-3.75'
        },
        'md-md': {
          padding: 'px-4.75'
        },
        'lg-lg': {
          padding: 'px-5.75'
        },
        'xl-xl': {
          padding: 'px-8.75'
        },
        'xxl-xxl': {
          padding: 'px-11.75'
        }
      },
      y: {
        xs: {
          padding: 'py-1'
        },
        sm: {
          padding: 'py-2'
        },
        md: {
          padding: 'py-2.5'
        },
        lg: {
          padding: 'py-3'
        },
        xl: {
          padding: 'py-4.5'
        },
        xxl: {
          padding: 'py-6'
        },
        'xs-xs': {
          padding: 'py-0.75'
        },
        'sm-sm': {
          padding: 'py-1.75'
        },
        'md-md': {
          padding: 'py-2.25'
        },
        'lg-lg': {
          padding: 'py-2.75'
        },
        'xl-xl': {
          padding: 'py-4.25'
        },
        'xxl-xxl': {
          padding: 'py-5.75'
        }
      },
      t: {
        xs: {
          padding: 'pt-1'
        },
        sm: {
          padding: 'pt-2'
        },
        md: {
          padding: 'pt-2.5'
        },
        lg: {
          padding: 'pt-3'
        },
        xl: {
          padding: 'pt-4.5'
        },
        xxl: {
          padding: 'pt-6'
        },
        'xs-xs': {
          padding: 'pt-0.75'
        },
        'sm-sm': {
          padding: 'pt-1.75'
        },
        'md-md': {
          padding: 'pt-2.25'
        },
        'lg-lg': {
          padding: 'pt-2.75'
        },
        'xl-xl': {
          padding: 'pt-4.25'
        },
        'xxl-xxl': {
          padding: 'pt-5.75'
        }
      },
      b: {
        xs: {
          padding: 'pb-1'
        },
        sm: {
          padding: 'pb-2'
        },
        md: {
          padding: 'pb-2.5'
        },
        lg: {
          padding: 'pb-3'
        },
        xl: {
          padding: 'pb-4.5'
        },
        xxl: {
          padding: 'pb-6'
        },
        'xs-xs': {
          padding: 'pb-0.75'
        },
        'sm-sm': {
          padding: 'pb-1.75'
        },
        'md-md': {
          padding: 'pb-2.25'
        },
        'lg-lg': {
          padding: 'pb-2.75'
        },
        'xl-xl': {
          padding: 'pb-4.25'
        },
        'xxl-xxl': {
          padding: 'pb-5.75'
        }
      },
      l: {
        xs: {
          padding: 'pl-2'
        },
        sm: {
          padding: 'pl-4'
        },
        md: {
          padding: 'pl-5'
        },
        lg: {
          padding: 'pl-6'
        },
        xl: {
          padding: 'pl-9'
        },
        xxl: {
          padding: 'pl-12'
        },
        'xs-xs': {
          padding: 'pl-1.75'
        },
        'sm-sm': {
          padding: 'pl-3.75'
        },
        'md-md': {
          padding: 'pl-4.75'
        },
        'lg-lg': {
          padding: 'pl-5.75'
        },
        'xl-xl': {
          padding: 'pl-8.75'
        },
        'xxl-xxl': {
          padding: 'pl-11.75'
        }
      },
      r: {
        xs: {
          padding: 'pr-2'
        },
        sm: {
          padding: 'pr-4'
        },
        md: {
          padding: 'pr-5'
        },
        lg: {
          padding: 'pr-6'
        },
        xl: {
          padding: 'pr-9'
        },
        xxl: {
          padding: 'pr-12'
        },
        'xs-xs': {
          padding: 'pr-1.75'
        },
        'sm-sm': {
          padding: 'pr-3.75'
        },
        'md-md': {
          padding: 'pr-4.75'
        },
        'lg-lg': {
          padding: 'pr-5.75'
        },
        'xl-xl': {
          padding: 'pr-8.75'
        },
        'xxl-xxl': {
          padding: 'pr-11.75'
        }
      }
    },
    square: {
      all: {
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
        },
        'xs-xs': {
          padding: 'p-0.75'
        },
        'sm-sm': {
          padding: 'p-1.75'
        },
        'md-md': {
          padding: 'p-2.25'
        },
        'lg-lg': {
          padding: 'p-2.75'
        },
        'xl-xl': {
          padding: 'p-4.25'
        },
        'xxl-xxl': {
          padding: 'p-5.75'
        }
      },
      x: {
        xs: {
          padding: 'px-1'
        },
        sm: {
          padding: 'px-2'
        },
        md: {
          padding: 'px-2.5'
        },
        lg: {
          padding: 'px-3'
        },
        xl: {
          padding: 'px-4.5'
        },
        xxl: {
          padding: 'px-6'
        },
        'xs-xs': {
          padding: 'px-0.75'
        },
        'sm-sm': {
          padding: 'px-1.75'
        },
        'md-md': {
          padding: 'px-2.25'
        },
        'lg-lg': {
          padding: 'px-2.75'
        },
        'xl-xl': {
          padding: 'px-4.25'
        },
        'xxl-xxl': {
          padding: 'px-5.75'
        }
      },
      y: {
        xs: {
          padding: 'py-1'
        },
        sm: {
          padding: 'py-2'
        },
        md: {
          padding: 'py-2.5'
        },
        lg: {
          padding: 'py-3'
        },
        xl: {
          padding: 'py-4.5'
        },
        xxl: {
          padding: 'py-6'
        },
        'xs-xs': {
          padding: 'py-0.75'
        },
        'sm-sm': {
          padding: 'py-1.75'
        },
        'md-md': {
          padding: 'py-2.25'
        },
        'lg-lg': {
          padding: 'py-2.75'
        },
        'xl-xl': {
          padding: 'py-4.25'
        },
        'xxl-xxl': {
          padding: 'py-5.75'
        }
      },
      t: {
        xs: {
          padding: 'pt-1'
        },
        sm: {
          padding: 'pt-2'
        },
        md: {
          padding: 'pt-2.5'
        },
        lg: {
          padding: 'pt-3'
        },
        xl: {
          padding: 'pt-4.5'
        },
        xxl: {
          padding: 'pt-6'
        },
        'xs-xs': {
          padding: 'pt-0.75'
        },
        'sm-sm': {
          padding: 'pt-1.75'
        },
        'md-md': {
          padding: 'pt-2.25'
        },
        'lg-lg': {
          padding: 'pt-2.75'
        },
        'xl-xl': {
          padding: 'pt-4.25'
        },
        'xxl-xxl': {
          padding: 'pt-5.75'
        }
      },
      b: {
        xs: {
          padding: 'pb-1'
        },
        sm: {
          padding: 'pb-2'
        },
        md: {
          padding: 'pb-2.5'
        },
        lg: {
          padding: 'pb-3'
        },
        xl: {
          padding: 'pb-4.5'
        },
        xxl: {
          padding: 'pb-6'
        },
        'xs-xs': {
          padding: 'pb-0.75'
        },
        'sm-sm': {
          padding: 'pb-1.75'
        },
        'md-md': {
          padding: 'pb-2.25'
        },
        'lg-lg': {
          padding: 'pb-2.75'
        },
        'xl-xl': {
          padding: 'pb-4.25'
        },
        'xxl-xxl': {
          padding: 'pb-5.75'
        }
      },
      l: {
        xs: {
          padding: 'pl-1'
        },
        sm: {
          padding: 'pl-2'
        },
        md: {
          padding: 'pl-2.5'
        },
        lg: {
          padding: 'pl-3'
        },
        xl: {
          padding: 'pl-4.5'
        },
        xxl: {
          padding: 'pl-6'
        },
        'xs-xs': {
          padding: 'pl-0.75'
        },
        'sm-sm': {
          padding: 'pl-1.75'
        },
        'md-md': {
          padding: 'pl-2.25'
        },
        'lg-lg': {
          padding: 'pl-2.75'
        },
        'xl-xl': {
          padding: 'pl-4.25'
        },
        'xxl-xxl': {
          padding: 'pl-5.75'
        }
      },
      r: {
        xs: {
          padding: 'pr-1'
        },
        sm: {
          padding: 'pr-2'
        },
        md: {
          padding: 'pr-2.5'
        },
        lg: {
          padding: 'pr-3'
        },
        xl: {
          padding: 'pr-4.5'
        },
        xxl: {
          padding: 'pr-6'
        },
        'xs-xs': {
          padding: 'pr-0.75'
        },
        'sm-sm': {
          padding: 'pr-1.75'
        },
        'md-md': {
          padding: 'pr-2.25'
        },
        'lg-lg': {
          padding: 'pr-2.75'
        },
        'xl-xl': {
          padding: 'pr-4.25'
        },
        'xxl-xxl': {
          padding: 'pr-5.75'
        }
      }
    },
    'inner-normal': {
      all: {
        xs: {
          padding: 'px-1 py-0.5'
        },
        sm: {
          padding: 'px-2 py-1'
        },
        md: {
          padding: 'px-3 py-1.5'
        },
        lg: {
          padding: 'px-4 py-2'
        },
        xl: {
          padding: 'px-5 py-2.5'
        },
        xxl: {
          padding: 'p-6 py-3'
        },
        'xs-xs': {
          padding: 'px-0.75 py-0.25'
        },
        'sm-sm': {
          padding: 'px-1.75 py-0.75'
        },
        'md-md': {
          padding: 'px-2.75 py-1.25'
        },
        'lg-lg': {
          padding: 'px-3.75 py-1.75'
        },
        'xl-xl': {
          padding: 'px-4.75 py-2.25'
        },
        'xxl-xxl': {
          padding: 'px-5.75 py-2.75'
        }
      },
      x: {
        xs: {
          padding: 'px-1'
        },
        sm: {
          padding: 'px-2'
        },
        md: {
          padding: 'px-3'
        },
        lg: {
          padding: 'px-4'
        },
        xl: {
          padding: 'px-5'
        },
        xxl: {
          padding: 'px-6'
        },
        'xs-xs': {
          padding: 'px-0.75'
        },
        'sm-sm': {
          padding: 'px-1.75'
        },
        'md-md': {
          padding: 'px-2.75'
        },
        'lg-lg': {
          padding: 'px-3.75'
        },
        'xl-xl': {
          padding: 'px-4.75'
        },
        'xxl-xxl': {
          padding: 'px-5.75'
        }
      },
      y: {
        xs: {
          padding: 'py-0.5'
        },
        sm: {
          padding: 'py-1'
        },
        md: {
          padding: 'py-1.5'
        },
        lg: {
          padding: 'py-2'
        },
        xl: {
          padding: 'py-2.5'
        },
        xxl: {
          padding: 'py-3'
        },
        'xs-xs': {
          padding: 'py-0.25'
        },
        'sm-sm': {
          padding: 'py-0.75'
        },
        'md-md': {
          padding: 'py-1.25'
        },
        'lg-lg': {
          padding: 'py-1.75'
        },
        'xl-xl': {
          padding: 'py-2.25'
        },
        'xxl-xxl': {
          padding: 'py-2.75'
        }
      },
      t: {
        xs: {
          padding: 'pt-0.5'
        },
        sm: {
          padding: 'pt-1'
        },
        md: {
          padding: 'pt-1.5'
        },
        lg: {
          padding: 'pt-2'
        },
        xl: {
          padding: 'pt-2.5'
        },
        xxl: {
          padding: 'pt-3'
        },
        'xs-xs': {
          padding: 'pt-0.25'
        },
        'sm-sm': {
          padding: 'pt-0.75'
        },
        'md-md': {
          padding: 'pt-1.25'
        },
        'lg-lg': {
          padding: 'pt-1.75'
        },
        'xl-xl': {
          padding: 'pt-2.25'
        },
        'xxl-xxl': {
          padding: 'pt-2.75'
        }
      },
      b: {
        xs: {
          padding: 'pb-0.5'
        },
        sm: {
          padding: 'pb-1'
        },
        md: {
          padding: 'pb-1.5'
        },
        lg: {
          padding: 'pb-2'
        },
        xl: {
          padding: 'pb-2.5'
        },
        xxl: {
          padding: 'pb-3'
        },
        'xs-xs': {
          padding: 'pb-0.25'
        },
        'sm-sm': {
          padding: 'pb-0.75'
        },
        'md-md': {
          padding: 'pb-1.25'
        },
        'lg-lg': {
          padding: 'pb-1.75'
        },
        'xl-xl': {
          padding: 'pb-2.25'
        },
        'xxl-xxl': {
          padding: 'pb-2.75'
        }
      },
      l: {
        xs: {
          padding: 'pl-1'
        },
        sm: {
          padding: 'pl-2'
        },
        md: {
          padding: 'pl-3'
        },
        lg: {
          padding: 'pl-4'
        },
        xl: {
          padding: 'pl-5'
        },
        xxl: {
          padding: 'pl-6'
        },
        'xs-xs': {
          padding: 'pl-0.75'
        },
        'sm-sm': {
          padding: 'pl-1.75'
        },
        'md-md': {
          padding: 'pl-2.75'
        },
        'lg-lg': {
          padding: 'pl-3.75'
        },
        'xl-xl': {
          padding: 'pl-4.75'
        },
        'xxl-xxl': {
          padding: 'pl-5.75'
        }
      },
      r: {
        xs: {
          padding: 'pr-1'
        },
        sm: {
          padding: 'pr-2'
        },
        md: {
          padding: 'pr-3'
        },
        lg: {
          padding: 'pr-4'
        },
        xl: {
          padding: 'pr-5'
        },
        xxl: {
          padding: 'pr-6'
        },
        'xs-xs': {
          padding: 'pr-0.75'
        },
        'sm-sm': {
          padding: 'pr-1.75'
        },
        'md-md': {
          padding: 'pr-2.75'
        },
        'lg-lg': {
          padding: 'pr-3.75'
        },
        'xl-xl': {
          padding: 'pr-4.75'
        },
        'xxl-xxl': {
          padding: 'pr-5.75'
        }
      }
    },
    'inner-square': {
      all: {
        xs: {
          padding: 'p-0.5'
        },
        sm: {
          padding: 'p-1'
        },
        md: {
          padding: 'p-1.5'
        },
        lg: {
          padding: 'p-2'
        },
        xl: {
          padding: 'p-2.5'
        },
        xxl: {
          padding: 'p-3'
        },
        'xs-xs': {
          padding: 'p-0.25'
        },
        'sm-sm': {
          padding: 'p-0.75'
        },
        'md-md': {
          padding: 'p-1.25'
        },
        'lg-lg': {
          padding: 'p-1.75'
        },
        'xl-xl': {
          padding: 'p-2.25'
        },
        'xxl-xxl': {
          padding: 'p-2.75'
        }
      },
      x: {
        xs: {
          padding: 'px-0.5'
        },
        sm: {
          padding: 'px-1'
        },
        md: {
          padding: 'px-1.5'
        },
        lg: {
          padding: 'px-2'
        },
        xl: {
          padding: 'px-2.5'
        },
        xxl: {
          padding: 'px-3'
        },
        'xs-xs': {
          padding: 'px-0.25'
        },
        'sm-sm': {
          padding: 'px-0.75'
        },
        'md-md': {
          padding: 'px-1.25'
        },
        'lg-lg': {
          padding: 'px-1.75'
        },
        'xl-xl': {
          padding: 'px-2.25'
        },
        'xxl-xxl': {
          padding: 'px-2.75'
        }
      },
      y: {
        xs: {
          padding: 'py-0.5'
        },
        sm: {
          padding: 'py-1'
        },
        md: {
          padding: 'py-1.5'
        },
        lg: {
          padding: 'py-2'
        },
        xl: {
          padding: 'py-2.5'
        },
        xxl: {
          padding: 'py-3'
        },
        'xs-xs': {
          padding: 'py-0.25'
        },
        'sm-sm': {
          padding: 'py-0.75'
        },
        'md-md': {
          padding: 'py-1.25'
        },
        'lg-lg': {
          padding: 'py-1.75'
        },
        'xl-xl': {
          padding: 'py-2.25'
        },
        'xxl-xxl': {
          padding: 'py-2.75'
        }
      },
      t: {
        xs: {
          padding: 'pt-0.5'
        },
        sm: {
          padding: 'pt-1'
        },
        md: {
          padding: 'pt-1.5'
        },
        lg: {
          padding: 'pt-2'
        },
        xl: {
          padding: 'pt-2.5'
        },
        xxl: {
          padding: 'pt-3'
        },
        'xs-xs': {
          padding: 'pt-0.25'
        },
        'sm-sm': {
          padding: 'pt-0.75'
        },
        'md-md': {
          padding: 'pt-1.25'
        },
        'lg-lg': {
          padding: 'pt-1.75'
        },
        'xl-xl': {
          padding: 'pt-2.25'
        },
        'xxl-xxl': {
          padding: 'pt-2.75'
        }
      },
      b: {
        xs: {
          padding: 'pb-0.5'
        },
        sm: {
          padding: 'pb-1'
        },
        md: {
          padding: 'pb-1.5'
        },
        lg: {
          padding: 'pb-2'
        },
        xl: {
          padding: 'pb-2.5'
        },
        xxl: {
          padding: 'pb-3'
        },
        'xs-xs': {
          padding: 'pb-0.25'
        },
        'sm-sm': {
          padding: 'pb-0.75'
        },
        'md-md': {
          padding: 'pb-1.25'
        },
        'lg-lg': {
          padding: 'pb-1.75'
        },
        'xl-xl': {
          padding: 'pb-2.25'
        },
        'xxl-xxl': {
          padding: 'pb-2.75'
        }
      },
      l: {
        xs: {
          padding: 'pl-0.5'
        },
        sm: {
          padding: 'pl-1'
        },
        md: {
          padding: 'pl-1.5'
        },
        lg: {
          padding: 'pl-2'
        },
        xl: {
          padding: 'pl-2.5'
        },
        xxl: {
          padding: 'pl-3'
        },
        'xs-xs': {
          padding: 'pl-0.25'
        },
        'sm-sm': {
          padding: 'pl-0.75'
        },
        'md-md': {
          padding: 'pl-1.25'
        },
        'lg-lg': {
          padding: 'pl-1.75'
        },
        'xl-xl': {
          padding: 'pl-2.25'
        },
        'xxl-xxl': {
          padding: 'pl-2.75'
        }
      },
      r: {
        xs: {
          padding: 'pr-0.5'
        },
        sm: {
          padding: 'pr-1'
        },
        md: {
          padding: 'pr-1.5'
        },
        lg: {
          padding: 'pr-2'
        },
        xl: {
          padding: 'pr-2.5'
        },
        xxl: {
          padding: 'pr-3'
        },
        'xs-xs': {
          padding: 'pr-0.25'
        },
        'sm-sm': {
          padding: 'pr-0.75'
        },
        'md-md': {
          padding: 'pr-1.25'
        },
        'lg-lg': {
          padding: 'pr-1.75'
        },
        'xl-xl': {
          padding: 'pr-2.25'
        },
        'xxl-xxl': {
          padding: 'pr-2.75'
        }
      }
    }
  },
  margin: {
    all: {
      none: {
        margin: 'm-0'
      },
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
      'xs-xs': {
        margin: 'm-1'
      },
      'sm-sm': {
        margin: 'm-2'
      },
      'md-md': {
        margin: 'm-3'
      },
      'lg-lg': {
        margin: 'm-4'
      },
      'xl-xl': {
        margin: 'm-6'
      },
      'xxl-xxl': {
        margin: 'm-8'
      }
    },
    x: {
      none: {
        margin: 'mx-0'
      },
      xs: {
        margin: 'mx-2'
      },
      sm: {
        margin: 'mx-4'
      },
      md: {
        margin: 'mx-6'
      },
      lg: {
        margin: 'mx-8'
      },
      xl: {
        margin: 'mx-12'
      },
      xxl: {
        margin: 'mx-16'
      },
      'xs-xs': {
        margin: 'mx-1'
      },
      'sm-sm': {
        margin: 'mx-2'
      },
      'md-md': {
        margin: 'mx-3'
      },
      'lg-lg': {
        margin: 'mx-4'
      },
      'xl-xl': {
        margin: 'mx-6'
      },
      'xxl-xxl': {
        margin: 'mx-8'
      }
    },
    y: {
      none: {
        margin: 'my-0'
      },
      xs: {
        margin: 'my-2'
      },
      sm: {
        margin: 'my-4'
      },
      md: {
        margin: 'my-6'
      },
      lg: {
        margin: 'my-8'
      },
      xl: {
        margin: 'my-12'
      },
      xxl: {
        margin: 'my-16'
      },
      'xs-xs': {
        margin: 'my-1'
      },
      'sm-sm': {
        margin: 'my-2'
      },
      'md-md': {
        margin: 'my-3'
      },
      'lg-lg': {
        margin: 'my-4'
      },
      'xl-xl': {
        margin: 'my-6'
      },
      'xxl-xxl': {
        margin: 'my-8'
      }
    },
    t: {
      none: {
        margin: 'mt-0'
      },
      xs: {
        margin: 'mt-2'
      },
      sm: {
        margin: 'mt-4'
      },
      md: {
        margin: 'mt-6'
      },
      lg: {
        margin: 'mt-8'
      },
      xl: {
        margin: 'mt-12'
      },
      xxl: {
        margin: 'mt-16'
      },
      'xs-xs': {
        margin: 'mt-1'
      },
      'sm-sm': {
        margin: 'mt-2'
      },
      'md-md': {
        margin: 'mt-3'
      },
      'lg-lg': {
        margin: 'mt-4'
      },
      'xl-xl': {
        margin: 'mt-6'
      },
      'xxl-xxl': {
        margin: 'mt-8'
      }
    },
    b: {
      none: {
        margin: 'mb-0'
      },
      xs: {
        margin: 'mb-2'
      },
      sm: {
        margin: 'mb-4'
      },
      md: {
        margin: 'mb-6'
      },
      lg: {
        margin: 'mb-8'
      },
      xl: {
        margin: 'mb-12'
      },
      xxl: {
        margin: 'mb-16'
      },
      'xs-xs': {
        margin: 'mb-1'
      },
      'sm-sm': {
        margin: 'mb-2'
      },
      'md-md': {
        margin: 'mb-3'
      },
      'lg-lg': {
        margin: 'mb-4'
      },
      'xl-xl': {
        margin: 'mb-6'
      },
      'xxl-xxl': {
        margin: 'mb-8'
      }
    },
    l: {
      none: {
        margin: 'ml-0'
      },
      xs: {
        margin: 'ml-2'
      },
      sm: {
        margin: 'ml-4'
      },
      md: {
        margin: 'ml-6'
      },
      lg: {
        margin: 'ml-8'
      },
      xl: {
        margin: 'ml-12'
      },
      xxl: {
        margin: 'ml-16'
      },
      'xs-xs': {
        margin: 'ml-1'
      },
      'sm-sm': {
        margin: 'ml-2'
      },
      'md-md': {
        margin: 'ml-3'
      },
      'lg-lg': {
        margin: 'ml-4'
      },
      'xl-xl': {
        margin: 'ml-6'
      },
      'xxl-xxl': {
        margin: 'ml-8'
      }
    },
    r: {
      none: {
        margin: 'mr-0'
      },
      xs: {
        margin: 'mr-2'
      },
      sm: {
        margin: 'mr-4'
      },
      md: {
        margin: 'mr-6'
      },
      lg: {
        margin: 'mr-8'
      },
      xl: {
        margin: 'mr-12'
      },
      xxl: {
        margin: 'mr-16'
      },
      'xs-xs': {
        margin: 'mr-1'
      },
      'sm-sm': {
        margin: 'mr-2'
      },
      'md-md': {
        margin: 'mr-3'
      },
      'lg-lg': {
        margin: 'mr-4'
      },
      'xl-xl': {
        margin: 'mr-6'
      },
      'xxl-xxl': {
        margin: 'mr-8'
      }
    }
  },
  spacing: {
    row: {
      none: {
        margin: '-space-x-0'
      },
      xs: {
        margin: '-space-x-2'
      },
      sm: {
        margin: '-space-x-4'
      },
      md: {
        margin: '-space-x-6'
      },
      lg: {
        margin: '-space-x-8'
      },
      xl: {
        margin: '-space-x-12'
      },
      xxl: {
        margin: '-space-x-16'
      },
      'xs-xs': {
        margin: '-space-x-1'
      },
      'sm-sm': {
        margin: '-space-x-2'
      },
      'md-md': {
        margin: '-space-x-3'
      },
      'lg-lg': {
        margin: '-space-x-4'
      },
      'xl-xl': {
        margin: '-space-x-6'
      },
      'xxl-xxl': {
        margin: '-space-x-8'
      }
    },
    col: {
      none: {
        margin: '-space-y-0'
      },
      xs: {
        margin: '-space-y-2'
      },
      sm: {
        margin: '-space-y-4'
      },
      md: {
        margin: '-space-y-6'
      },
      lg: {
        margin: '-space-y-8'
      },
      xl: {
        margin: '-space-y-12'
      },
      xxl: {
        margin: '-space-y-16'
      },
      'xs-xs': {
        margin: '-space-y-1'
      },
      'sm-sm': {
        margin: '-space-y-2'
      },
      'md-md': {
        margin: '-space-y-3'
      },
      'lg-lg': {
        margin: '-space-y-4'
      },
      'xl-xl': {
        margin: '-space-y-6'
      },
      'xxl-xxl': {
        margin: '-space-y-8'
      }
    }
  },
  border: {
    all: {
      none: {
        borderWidth: 'border-0'
      },
      set: {
        borderWidth: 'border'
      }
    },
    x: {
      none: {
        borderWidth: 'border-x-0'
      },
      set: {
        borderWidth: 'border-x'
      }
    },
    y: {
      none: {
        borderWidth: 'border-y-0'
      },
      set: {
        borderWidth: 'border-y'
      }
    },
    t: {
      none: {
        borderWidth: 'border-t-0'
      },
      set: {
        borderWidth: 'border-t'
      }
    },
    b: {
      none: {
        borderWidth: 'border-b-0'
      },
      set: {
        borderWidth: 'border-b'
      }
    },
    l: {
      none: {
        borderWidth: 'border-l-0'
      },
      set: {
        borderWidth: 'border-l'
      }
    },
    r: {
      none: {
        borderWidth: 'border-r-0'
      },
      set: {
        borderWidth: 'border-r'
      }
    }
  },
  radius: {
    all: {
      none: {
        borderRadius: 'rounded-none'
      },
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
      }
    },
    t: {
      none: {
        borderRadius: 'rounded-t-none'
      },
      xs: {
        borderRadius: 'rounded-t-sm'
      },
      sm: {
        borderRadius: 'rounded-t-md'
      },
      md: {
        borderRadius: 'rounded-t-lg'
      },
      lg: {
        borderRadius: 'rounded-t-xl'
      },
      xl: {
        borderRadius: 'rounded-t-2xl'
      },
      xxl: {
        borderRadius: 'rounded-t-3xl'
      },
      full: {
        borderRadius: 'rounded-t-full'
      }
    },
    b: {
      none: {
        borderRadius: 'rounded-b-none'
      },
      xs: {
        borderRadius: 'rounded-b-sm'
      },
      sm: {
        borderRadius: 'rounded-b-md'
      },
      md: {
        borderRadius: 'rounded-b-lg'
      },
      lg: {
        borderRadius: 'rounded-b-xl'
      },
      xl: {
        borderRadius: 'rounded-b-2xl'
      },
      xxl: {
        borderRadius: 'rounded-b-3xl'
      },
      full: {
        borderRadius: 'rounded-b-full'
      }
    },
    l: {
      none: {
        borderRadius: 'rounded-l-none'
      },
      xs: {
        borderRadius: 'rounded-l-sm'
      },
      sm: {
        borderRadius: 'rounded-l-md'
      },
      md: {
        borderRadius: 'rounded-l-lg'
      },
      lg: {
        borderRadius: 'rounded-l-xl'
      },
      xl: {
        borderRadius: 'rounded-l-2xl'
      },
      xxl: {
        borderRadius: 'rounded-l-3xl'
      },
      full: {
        borderRadius: 'rounded-l-full'
      }
    },
    r: {
      none: {
        borderRadius: 'rounded-r-none'
      },
      xs: {
        borderRadius: 'rounded-r-sm'
      },
      sm: {
        borderRadius: 'rounded-r-md'
      },
      md: {
        borderRadius: 'rounded-r-lg'
      },
      lg: {
        borderRadius: 'rounded-r-xl'
      },
      xl: {
        borderRadius: 'rounded-r-2xl'
      },
      xxl: {
        borderRadius: 'rounded-r-3xl'
      },
      full: {
        borderRadius: 'rounded-r-full'
      }
    },
    tl: {
      none: {
        borderRadius: 'rounded-tl-none'
      },
      xs: {
        borderRadius: 'rounded-tl-sm'
      },
      sm: {
        borderRadius: 'rounded-tl-md'
      },
      md: {
        borderRadius: 'rounded-tl-lg'
      },
      lg: {
        borderRadius: 'rounded-tl-xl'
      },
      xl: {
        borderRadius: 'rounded-tl-2xl'
      },
      xxl: {
        borderRadius: 'rounded-tl-3xl'
      },
      full: {
        borderRadius: 'rounded-tl-full'
      }
    },
    tr: {
      none: {
        borderRadius: 'rounded-tr-none'
      },
      xs: {
        borderRadius: 'rounded-tr-sm'
      },
      sm: {
        borderRadius: 'rounded-tr-md'
      },
      md: {
        borderRadius: 'rounded-tr-lg'
      },
      lg: {
        borderRadius: 'rounded-tr-xl'
      },
      xl: {
        borderRadius: 'rounded-tr-2xl'
      },
      xxl: {
        borderRadius: 'rounded-tr-3xl'
      },
      full: {
        borderRadius: 'rounded-tr-full'
      }
    },
    bl: {
      none: {
        borderRadius: 'rounded-bl-none'
      },
      xs: {
        borderRadius: 'rounded-bl-sm'
      },
      sm: {
        borderRadius: 'rounded-bl-md'
      },
      md: {
        borderRadius: 'rounded-bl-lg'
      },
      lg: {
        borderRadius: 'rounded-bl-xl'
      },
      xl: {
        borderRadius: 'rounded-bl-2xl'
      },
      xxl: {
        borderRadius: 'rounded-bl-3xl'
      },
      full: {
        borderRadius: 'rounded-bl-full'
      }
    },
    br: {
      none: {
        borderRadius: 'rounded-br-none'
      },
      xs: {
        borderRadius: 'rounded-br-sm'
      },
      sm: {
        borderRadius: 'rounded-br-md'
      },
      md: {
        borderRadius: 'rounded-br-lg'
      },
      lg: {
        borderRadius: 'rounded-br-xl'
      },
      xl: {
        borderRadius: 'rounded-br-2xl'
      },
      xxl: {
        borderRadius: 'rounded-br-3xl'
      },
      full: {
        borderRadius: 'rounded-br-full'
      }
    }
  },
  shadow: {
    none: {
      boxShadow: 'shadow-none'
    },
    xs: {
      boxShadow: 'shadow-xs'
    },
    sm: {
      boxShadow: 'shadow-sm'
    },
    md: {
      boxShadow: 'shadow-md'
    },
    lg: {
      boxShadow: 'shadow-lg'
    },
    xl: {
      boxShadow: 'shadow-xl'
    },
    xxl: {
      boxShadow: 'shadow-2xl'
    }
  },
  color: {
    normal: {
      bg: {
        light: {
          disabled: {
            color: 'bg-disabled-500'
          },
          surface: {
            color: 'bg-surface-500'
          },
          neutral: {
            color: 'bg-neutral-500'
          },
          primary: {
            color: 'bg-primary-500'
          },
          secondary: {
            color: 'bg-secondary-500'
          },
          tertiary: {
            color: 'bg-tertiary-500'
          },
          success: {
            color: 'bg-success-500'
          },
          warning: {
            color: 'bg-warning-500'
          },
          error: {
            color: 'bg-error-500'
          },
          'disabled-light': {
            color: 'bg-disabled-300'
          },
          'surface-light': {
            color: 'bg-surface-300'
          },
          'neutral-light': {
            color: 'bg-neutral-300'
          },
          'primary-light': {
            color: 'bg-primary-300'
          },
          'secondary-light': {
            color: 'bg-secondary-300'
          },
          'tertiary-light': {
            color: 'bg-tertiary-300'
          },
          'success-light': {
            color: 'bg-success-300'
          },
          'warning-light': {
            color: 'bg-warning-300'
          },
          'error-light': {
            color: 'bg-error-300'
          },
          'disabled-on': {
            color: 'bg-disabled-50'
          },
          'surface-on': {
            color: 'bg-surface-50'
          },
          'neutral-on': {
            color: 'bg-neutral-50'
          },
          'primary-on': {
            color: 'bg-primary-50'
          },
          'secondary-on': {
            color: 'bg-secondary-50'
          },
          'tertiary-on': {
            color: 'bg-tertiary-50'
          },
          'success-on': {
            color: 'bg-success-50'
          },
          'warning-on': {
            color: 'bg-warning-50'
          },
          'error-on': {
            color: 'bg-error-50'
          }
        },
        dark: {
          disabled: {
            color: 'bg-disabled-600'
          },
          surface: {
            color: 'bg-surface-600'
          },
          neutral: {
            color: 'bg-neutral-600'
          },
          primary: {
            color: 'bg-primary-600'
          },
          secondary: {
            color: 'bg-secondary-600'
          },
          tertiary: {
            color: 'bg-tertiary-600'
          },
          success: {
            color: 'bg-success-600'
          },
          warning: {
            color: 'bg-warning-600'
          },
          error: {
            color: 'bg-error-600'
          },
          'disabled-light': {
            color: 'bg-disabled-400'
          },
          'surface-light': {
            color: 'bg-surface-400'
          },
          'neutral-light': {
            color: 'bg-neutral-400'
          },
          'primary-light': {
            color: 'bg-primary-400'
          },
          'secondary-light': {
            color: 'bg-secondary-400'
          },
          'tertiary-light': {
            color: 'bg-tertiary-400'
          },
          'success-light': {
            color: 'bg-success-400'
          },
          'warning-light': {
            color: 'bg-warning-400'
          },
          'error-light': {
            color: 'bg-error-400'
          },
          'disabled-on': {
            color: 'bg-disabled-100'
          },
          'surface-on': {
            color: 'bg-surface-100'
          },
          'neutral-on': {
            color: 'bg-neutral-100'
          },
          'primary-on': {
            color: 'bg-primary-100'
          },
          'secondary-on': {
            color: 'bg-secondary-100'
          },
          'tertiary-on': {
            color: 'bg-tertiary-100'
          },
          'success-on': {
            color: 'bg-success-100'
          },
          'warning-on': {
            color: 'bg-warning-100'
          },
          'error-on': {
            color: 'bg-error-100'
          }
        }
      },
      border: {
        light: {
          disabled: {
            color: 'border-disabled-500'
          },
          surface: {
            color: 'border-surface-500'
          },
          neutral: {
            color: 'border-neutral-500'
          },
          primary: {
            color: 'border-primary-500'
          },
          secondary: {
            color: 'border-secondary-500'
          },
          tertiary: {
            color: 'border-tertiary-500'
          },
          success: {
            color: 'border-success-500'
          },
          warning: {
            color: 'border-warning-500'
          },
          error: {
            color: 'border-error-500'
          },
          'disabled-light': {
            color: 'border-disabled-300'
          },
          'surface-light': {
            color: 'border-surface-300'
          },
          'neutral-light': {
            color: 'border-neutral-300'
          },
          'primary-light': {
            color: 'border-primary-300'
          },
          'secondary-light': {
            color: 'border-secondary-300'
          },
          'tertiary-light': {
            color: 'border-tertiary-300'
          },
          'success-light': {
            color: 'border-success-300'
          },
          'warning-light': {
            color: 'border-warning-300'
          },
          'error-light': {
            color: 'border-error-300'
          },
          'disabled-on': {
            color: 'border-disabled-50'
          },
          'surface-on': {
            color: 'border-surface-50'
          },
          'neutral-on': {
            color: 'border-neutral-50'
          },
          'primary-on': {
            color: 'border-primary-50'
          },
          'secondary-on': {
            color: 'border-secondary-50'
          },
          'tertiary-on': {
            color: 'border-tertiary-50'
          },
          'success-on': {
            color: 'border-success-50'
          },
          'warning-on': {
            color: 'border-warning-50'
          },
          'error-on': {
            color: 'border-error-50'
          }
        },
        dark: {
          disabled: {
            color: 'border-disabled-600'
          },
          surface: {
            color: 'border-surface-600'
          },
          neutral: {
            color: 'border-neutral-600'
          },
          primary: {
            color: 'border-primary-600'
          },
          secondary: {
            color: 'border-secondary-600'
          },
          tertiary: {
            color: 'border-tertiary-600'
          },
          success: {
            color: 'border-success-600'
          },
          warning: {
            color: 'border-warning-600'
          },
          error: {
            color: 'border-error-600'
          },
          'disabled-light': {
            color: 'border-disabled-400'
          },
          'surface-light': {
            color: 'border-surface-400'
          },
          'neutral-light': {
            color: 'border-neutral-400'
          },
          'primary-light': {
            color: 'border-primary-400'
          },
          'secondary-light': {
            color: 'border-secondary-400'
          },
          'tertiary-light': {
            color: 'border-tertiary-400'
          },
          'success-light': {
            color: 'border-success-400'
          },
          'warning-light': {
            color: 'border-warning-400'
          },
          'error-light': {
            color: 'border-error-400'
          },
          'disabled-on': {
            color: 'border-disabled-100'
          },
          'surface-on': {
            color: 'border-surface-100'
          },
          'neutral-on': {
            color: 'border-neutral-100'
          },
          'primary-on': {
            color: 'border-primary-100'
          },
          'secondary-on': {
            color: 'border-secondary-100'
          },
          'tertiary-on': {
            color: 'border-tertiary-100'
          },
          'success-on': {
            color: 'border-success-100'
          },
          'warning-on': {
            color: 'border-warning-100'
          },
          'error-on': {
            color: 'border-error-100'
          }
        }
      },
      text: {
        light: {
          disabled: {
            color: 'text-disabled-500'
          },
          surface: {
            color: 'text-surface-500'
          },
          neutral: {
            color: 'text-neutral-500'
          },
          primary: {
            color: 'text-primary-500'
          },
          secondary: {
            color: 'text-secondary-500'
          },
          tertiary: {
            color: 'text-tertiary-500'
          },
          success: {
            color: 'text-success-500'
          },
          warning: {
            color: 'text-warning-500'
          },
          error: {
            color: 'text-error-500'
          },
          'disabled-light': {
            color: 'text-disabled-300'
          },
          'surface-light': {
            color: 'text-surface-300'
          },
          'neutral-light': {
            color: 'text-neutral-300'
          },
          'primary-light': {
            color: 'text-primary-300'
          },
          'secondary-light': {
            color: 'text-secondary-300'
          },
          'tertiary-light': {
            color: 'text-tertiary-300'
          },
          'success-light': {
            color: 'text-success-300'
          },
          'warning-light': {
            color: 'text-warning-300'
          },
          'error-light': {
            color: 'text-error-300'
          },
          'disabled-on': {
            color: 'text-disabled-50'
          },
          'surface-on': {
            color: 'text-surface-50'
          },
          'neutral-on': {
            color: 'text-neutral-50'
          },
          'primary-on': {
            color: 'text-primary-50'
          },
          'secondary-on': {
            color: 'text-secondary-50'
          },
          'tertiary-on': {
            color: 'text-tertiary-50'
          },
          'success-on': {
            color: 'text-success-50'
          },
          'warning-on': {
            color: 'text-warning-50'
          },
          'error-on': {
            color: 'text-error-50'
          }
        },
        dark: {
          disabled: {
            color: 'text-disabled-600'
          },
          surface: {
            color: 'text-surface-600'
          },
          neutral: {
            color: 'text-neutral-600'
          },
          primary: {
            color: 'text-primary-600'
          },
          secondary: {
            color: 'text-secondary-600'
          },
          tertiary: {
            color: 'text-tertiary-600'
          },
          success: {
            color: 'text-success-600'
          },
          warning: {
            color: 'text-warning-600'
          },
          error: {
            color: 'text-error-600'
          },
          'disabled-light': {
            color: 'text-disabled-400'
          },
          'surface-light': {
            color: 'text-surface-400'
          },
          'neutral-light': {
            color: 'text-neutral-400'
          },
          'primary-light': {
            color: 'text-primary-400'
          },
          'secondary-light': {
            color: 'text-secondary-400'
          },
          'tertiary-light': {
            color: 'text-tertiary-400'
          },
          'success-light': {
            color: 'text-success-400'
          },
          'warning-light': {
            color: 'text-warning-400'
          },
          'error-light': {
            color: 'text-error-400'
          },
          'disabled-on': {
            color: 'text-disabled-100'
          },
          'surface-on': {
            color: 'text-surface-100'
          },
          'neutral-on': {
            color: 'text-neutral-100'
          },
          'primary-on': {
            color: 'text-primary-100'
          },
          'secondary-on': {
            color: 'text-secondary-100'
          },
          'tertiary-on': {
            color: 'text-tertiary-100'
          },
          'success-on': {
            color: 'text-success-100'
          },
          'warning-on': {
            color: 'text-warning-100'
          },
          'error-on': {
            color: 'text-error-100'
          }
        }
      },
      fill: {
        light: {
          disabled: {
            color: 'fill-disabled-500'
          },
          surface: {
            color: 'fill-surface-500'
          },
          neutral: {
            color: 'fill-neutral-500'
          },
          primary: {
            color: 'fill-primary-500'
          },
          secondary: {
            color: 'fill-secondary-500'
          },
          tertiary: {
            color: 'fill-tertiary-500'
          },
          success: {
            color: 'fill-success-500'
          },
          warning: {
            color: 'fill-warning-500'
          },
          error: {
            color: 'fill-error-500'
          },
          'disabled-light': {
            color: 'fill-disabled-300'
          },
          'surface-light': {
            color: 'fill-surface-300'
          },
          'neutral-light': {
            color: 'fill-neutral-300'
          },
          'primary-light': {
            color: 'fill-primary-300'
          },
          'secondary-light': {
            color: 'fill-secondary-300'
          },
          'tertiary-light': {
            color: 'fill-tertiary-300'
          },
          'success-light': {
            color: 'fill-success-300'
          },
          'warning-light': {
            color: 'fill-warning-300'
          },
          'error-light': {
            color: 'fill-error-300'
          },
          'disabled-on': {
            color: 'fill-disabled-50'
          },
          'surface-on': {
            color: 'fill-surface-50'
          },
          'neutral-on': {
            color: 'fill-neutral-50'
          },
          'primary-on': {
            color: 'fill-primary-50'
          },
          'secondary-on': {
            color: 'fill-secondary-50'
          },
          'tertiary-on': {
            color: 'fill-tertiary-50'
          },
          'success-on': {
            color: 'fill-success-50'
          },
          'warning-on': {
            color: 'fill-warning-50'
          },
          'error-on': {
            color: 'fill-error-50'
          }
        },
        dark: {
          disabled: {
            color: 'fill-disabled-600'
          },
          surface: {
            color: 'fill-surface-600'
          },
          neutral: {
            color: 'fill-neutral-600'
          },
          primary: {
            color: 'fill-primary-600'
          },
          secondary: {
            color: 'fill-secondary-600'
          },
          tertiary: {
            color: 'fill-tertiary-600'
          },
          success: {
            color: 'fill-success-600'
          },
          warning: {
            color: 'fill-warning-600'
          },
          error: {
            color: 'fill-error-600'
          },
          'disabled-light': {
            color: 'fill-disabled-400'
          },
          'surface-light': {
            color: 'fill-surface-400'
          },
          'neutral-light': {
            color: 'fill-neutral-400'
          },
          'primary-light': {
            color: 'fill-primary-400'
          },
          'secondary-light': {
            color: 'fill-secondary-400'
          },
          'tertiary-light': {
            color: 'fill-tertiary-400'
          },
          'success-light': {
            color: 'fill-success-400'
          },
          'warning-light': {
            color: 'fill-warning-400'
          },
          'error-light': {
            color: 'fill-error-400'
          },
          'disabled-on': {
            color: 'fill-disabled-100'
          },
          'surface-on': {
            color: 'fill-surface-100'
          },
          'neutral-on': {
            color: 'fill-neutral-100'
          },
          'primary-on': {
            color: 'fill-primary-100'
          },
          'secondary-on': {
            color: 'fill-secondary-100'
          },
          'tertiary-on': {
            color: 'fill-tertiary-100'
          },
          'success-on': {
            color: 'fill-success-100'
          },
          'warning-on': {
            color: 'fill-warning-100'
          },
          'error-on': {
            color: 'fill-error-100'
          }
        }
      },
      stroke: {
        light: {
          disabled: {
            color: 'stroke-disabled-500'
          },
          surface: {
            color: 'stroke-surface-500'
          },
          neutral: {
            color: 'stroke-neutral-500'
          },
          primary: {
            color: 'stroke-primary-500'
          },
          secondary: {
            color: 'stroke-secondary-500'
          },
          tertiary: {
            color: 'stroke-tertiary-500'
          },
          success: {
            color: 'stroke-success-500'
          },
          warning: {
            color: 'stroke-warning-500'
          },
          error: {
            color: 'stroke-error-500'
          },
          'disabled-light': {
            color: 'stroke-disabled-300'
          },
          'surface-light': {
            color: 'stroke-surface-300'
          },
          'neutral-light': {
            color: 'stroke-neutral-300'
          },
          'primary-light': {
            color: 'stroke-primary-300'
          },
          'secondary-light': {
            color: 'stroke-secondary-300'
          },
          'tertiary-light': {
            color: 'stroke-tertiary-300'
          },
          'success-light': {
            color: 'stroke-success-300'
          },
          'warning-light': {
            color: 'stroke-warning-300'
          },
          'error-light': {
            color: 'stroke-error-300'
          },
          'disabled-on': {
            color: 'stroke-disabled-50'
          },
          'surface-on': {
            color: 'stroke-surface-50'
          },
          'neutral-on': {
            color: 'stroke-neutral-50'
          },
          'primary-on': {
            color: 'stroke-primary-50'
          },
          'secondary-on': {
            color: 'stroke-secondary-50'
          },
          'tertiary-on': {
            color: 'stroke-tertiary-50'
          },
          'success-on': {
            color: 'stroke-success-50'
          },
          'warning-on': {
            color: 'stroke-warning-50'
          },
          'error-on': {
            color: 'stroke-error-50'
          }
        },
        dark: {
          disabled: {
            color: 'stroke-disabled-600'
          },
          surface: {
            color: 'stroke-surface-600'
          },
          neutral: {
            color: 'stroke-neutral-600'
          },
          primary: {
            color: 'stroke-primary-600'
          },
          secondary: {
            color: 'stroke-secondary-600'
          },
          tertiary: {
            color: 'stroke-tertiary-600'
          },
          success: {
            color: 'stroke-success-600'
          },
          warning: {
            color: 'stroke-warning-600'
          },
          error: {
            color: 'stroke-error-600'
          },
          'disabled-light': {
            color: 'stroke-disabled-400'
          },
          'surface-light': {
            color: 'stroke-surface-400'
          },
          'neutral-light': {
            color: 'stroke-neutral-400'
          },
          'primary-light': {
            color: 'stroke-primary-400'
          },
          'secondary-light': {
            color: 'stroke-secondary-400'
          },
          'tertiary-light': {
            color: 'stroke-tertiary-400'
          },
          'success-light': {
            color: 'stroke-success-400'
          },
          'warning-light': {
            color: 'stroke-warning-400'
          },
          'error-light': {
            color: 'stroke-error-400'
          },
          'disabled-on': {
            color: 'stroke-disabled-100'
          },
          'surface-on': {
            color: 'stroke-surface-100'
          },
          'neutral-on': {
            color: 'stroke-neutral-100'
          },
          'primary-on': {
            color: 'stroke-primary-100'
          },
          'secondary-on': {
            color: 'stroke-secondary-100'
          },
          'tertiary-on': {
            color: 'stroke-tertiary-100'
          },
          'success-on': {
            color: 'stroke-success-100'
          },
          'warning-on': {
            color: 'stroke-warning-100'
          },
          'error-on': {
            color: 'stroke-error-100'
          }
        }
      },
      ring: {
        light: {
          disabled: {
            color: 'ring-disabled-500'
          },
          surface: {
            color: 'ring-surface-500'
          },
          neutral: {
            color: 'ring-neutral-500'
          },
          primary: {
            color: 'ring-primary-500'
          },
          secondary: {
            color: 'ring-secondary-500'
          },
          tertiary: {
            color: 'ring-tertiary-500'
          },
          success: {
            color: 'ring-success-500'
          },
          warning: {
            color: 'ring-warning-500'
          },
          error: {
            color: 'ring-error-500'
          },
          'disabled-light': {
            color: 'ring-disabled-300'
          },
          'surface-light': {
            color: 'ring-surface-300'
          },
          'neutral-light': {
            color: 'ring-neutral-300'
          },
          'primary-light': {
            color: 'ring-primary-300'
          },
          'secondary-light': {
            color: 'ring-secondary-300'
          },
          'tertiary-light': {
            color: 'ring-tertiary-300'
          },
          'success-light': {
            color: 'ring-success-300'
          },
          'warning-light': {
            color: 'ring-warning-300'
          },
          'error-light': {
            color: 'ring-error-300'
          },
          'disabled-on': {
            color: 'ring-disabled-50'
          },
          'surface-on': {
            color: 'ring-surface-50'
          },
          'neutral-on': {
            color: 'ring-neutral-50'
          },
          'primary-on': {
            color: 'ring-primary-50'
          },
          'secondary-on': {
            color: 'ring-secondary-50'
          },
          'tertiary-on': {
            color: 'ring-tertiary-50'
          },
          'success-on': {
            color: 'ring-success-50'
          },
          'warning-on': {
            color: 'ring-warning-50'
          },
          'error-on': {
            color: 'ring-error-50'
          }
        },
        dark: {
          disabled: {
            color: 'ring-disabled-600'
          },
          surface: {
            color: 'ring-surface-600'
          },
          neutral: {
            color: 'ring-neutral-600'
          },
          primary: {
            color: 'ring-primary-600'
          },
          secondary: {
            color: 'ring-secondary-600'
          },
          tertiary: {
            color: 'ring-tertiary-600'
          },
          success: {
            color: 'ring-success-600'
          },
          warning: {
            color: 'ring-warning-600'
          },
          error: {
            color: 'ring-error-600'
          },
          'disabled-light': {
            color: 'ring-disabled-400'
          },
          'surface-light': {
            color: 'ring-surface-400'
          },
          'neutral-light': {
            color: 'ring-neutral-400'
          },
          'primary-light': {
            color: 'ring-primary-400'
          },
          'secondary-light': {
            color: 'ring-secondary-400'
          },
          'tertiary-light': {
            color: 'ring-tertiary-400'
          },
          'success-light': {
            color: 'ring-success-400'
          },
          'warning-light': {
            color: 'ring-warning-400'
          },
          'error-light': {
            color: 'ring-error-400'
          },
          'disabled-on': {
            color: 'ring-disabled-100'
          },
          'surface-on': {
            color: 'ring-surface-100'
          },
          'neutral-on': {
            color: 'ring-neutral-100'
          },
          'primary-on': {
            color: 'ring-primary-100'
          },
          'secondary-on': {
            color: 'ring-secondary-100'
          },
          'tertiary-on': {
            color: 'ring-tertiary-100'
          },
          'success-on': {
            color: 'ring-success-100'
          },
          'warning-on': {
            color: 'ring-warning-100'
          },
          'error-on': {
            color: 'ring-error-100'
          }
        }
      }
    },
    checked: {
      bg: {
        light: {
          disabled: {
            color: '[.checked]:bg-disabled-500'
          },
          surface: {
            color: '[.checked]:bg-surface-500'
          },
          neutral: {
            color: '[.checked]:bg-neutral-500'
          },
          primary: {
            color: '[.checked]:bg-primary-500'
          },
          secondary: {
            color: '[.checked]:bg-secondary-500'
          },
          tertiary: {
            color: '[.checked]:bg-tertiary-500'
          },
          success: {
            color: '[.checked]:bg-success-500'
          },
          warning: {
            color: '[.checked]:bg-warning-500'
          },
          error: {
            color: '[.checked]:bg-error-500'
          },
          'disabled-light': {
            color: '[.checked]:bg-disabled-300'
          },
          'surface-light': {
            color: '[.checked]:bg-surface-300'
          },
          'neutral-light': {
            color: '[.checked]:bg-neutral-300'
          },
          'primary-light': {
            color: '[.checked]:bg-primary-300'
          },
          'secondary-light': {
            color: '[.checked]:bg-secondary-300'
          },
          'tertiary-light': {
            color: '[.checked]:bg-tertiary-300'
          },
          'success-light': {
            color: '[.checked]:bg-success-300'
          },
          'warning-light': {
            color: '[.checked]:bg-warning-300'
          },
          'error-light': {
            color: '[.checked]:bg-error-300'
          },
          'disabled-on': {
            color: '[.checked]:bg-disabled-50'
          },
          'surface-on': {
            color: '[.checked]:bg-surface-50'
          },
          'neutral-on': {
            color: '[.checked]:bg-neutral-50'
          },
          'primary-on': {
            color: '[.checked]:bg-primary-50'
          },
          'secondary-on': {
            color: '[.checked]:bg-secondary-50'
          },
          'tertiary-on': {
            color: '[.checked]:bg-tertiary-50'
          },
          'success-on': {
            color: '[.checked]:bg-success-50'
          },
          'warning-on': {
            color: '[.checked]:bg-warning-50'
          },
          'error-on': {
            color: '[.checked]:bg-error-50'
          }
        },
        dark: {
          disabled: {
            color: '[.checked]:bg-disabled-600'
          },
          surface: {
            color: '[.checked]:bg-surface-600'
          },
          neutral: {
            color: '[.checked]:bg-neutral-600'
          },
          primary: {
            color: '[.checked]:bg-primary-600'
          },
          secondary: {
            color: '[.checked]:bg-secondary-600'
          },
          tertiary: {
            color: '[.checked]:bg-tertiary-600'
          },
          success: {
            color: '[.checked]:bg-success-600'
          },
          warning: {
            color: '[.checked]:bg-warning-600'
          },
          error: {
            color: '[.checked]:bg-error-600'
          },
          'disabled-light': {
            color: '[.checked]:bg-disabled-400'
          },
          'surface-light': {
            color: '[.checked]:bg-surface-400'
          },
          'neutral-light': {
            color: '[.checked]:bg-neutral-400'
          },
          'primary-light': {
            color: '[.checked]:bg-primary-400'
          },
          'secondary-light': {
            color: '[.checked]:bg-secondary-400'
          },
          'tertiary-light': {
            color: '[.checked]:bg-tertiary-400'
          },
          'success-light': {
            color: '[.checked]:bg-success-400'
          },
          'warning-light': {
            color: '[.checked]:bg-warning-400'
          },
          'error-light': {
            color: '[.checked]:bg-error-400'
          },
          'disabled-on': {
            color: '[.checked]:bg-disabled-100'
          },
          'surface-on': {
            color: '[.checked]:bg-surface-100'
          },
          'neutral-on': {
            color: '[.checked]:bg-neutral-100'
          },
          'primary-on': {
            color: '[.checked]:bg-primary-100'
          },
          'secondary-on': {
            color: '[.checked]:bg-secondary-100'
          },
          'tertiary-on': {
            color: '[.checked]:bg-tertiary-100'
          },
          'success-on': {
            color: '[.checked]:bg-success-100'
          },
          'warning-on': {
            color: '[.checked]:bg-warning-100'
          },
          'error-on': {
            color: '[.checked]:bg-error-100'
          }
        }
      },
      border: {
        light: {
          disabled: {
            color: '[.checked]:border-disabled-500'
          },
          surface: {
            color: '[.checked]:border-surface-500'
          },
          neutral: {
            color: '[.checked]:border-neutral-500'
          },
          primary: {
            color: '[.checked]:border-primary-500'
          },
          secondary: {
            color: '[.checked]:border-secondary-500'
          },
          tertiary: {
            color: '[.checked]:border-tertiary-500'
          },
          success: {
            color: '[.checked]:border-success-500'
          },
          warning: {
            color: '[.checked]:border-warning-500'
          },
          error: {
            color: '[.checked]:border-error-500'
          },
          'disabled-light': {
            color: '[.checked]:border-disabled-300'
          },
          'surface-light': {
            color: '[.checked]:border-surface-300'
          },
          'neutral-light': {
            color: '[.checked]:border-neutral-300'
          },
          'primary-light': {
            color: '[.checked]:border-primary-300'
          },
          'secondary-light': {
            color: '[.checked]:border-secondary-300'
          },
          'tertiary-light': {
            color: '[.checked]:border-tertiary-300'
          },
          'success-light': {
            color: '[.checked]:border-success-300'
          },
          'warning-light': {
            color: '[.checked]:border-warning-300'
          },
          'error-light': {
            color: '[.checked]:border-error-300'
          },
          'disabled-on': {
            color: '[.checked]:border-disabled-50'
          },
          'surface-on': {
            color: '[.checked]:border-surface-50'
          },
          'neutral-on': {
            color: '[.checked]:border-neutral-50'
          },
          'primary-on': {
            color: '[.checked]:border-primary-50'
          },
          'secondary-on': {
            color: '[.checked]:border-secondary-50'
          },
          'tertiary-on': {
            color: '[.checked]:border-tertiary-50'
          },
          'success-on': {
            color: '[.checked]:border-success-50'
          },
          'warning-on': {
            color: '[.checked]:border-warning-50'
          },
          'error-on': {
            color: '[.checked]:border-error-50'
          }
        },
        dark: {
          disabled: {
            color: '[.checked]:border-disabled-600'
          },
          surface: {
            color: '[.checked]:border-surface-600'
          },
          neutral: {
            color: '[.checked]:border-neutral-600'
          },
          primary: {
            color: '[.checked]:border-primary-600'
          },
          secondary: {
            color: '[.checked]:border-secondary-600'
          },
          tertiary: {
            color: '[.checked]:border-tertiary-600'
          },
          success: {
            color: '[.checked]:border-success-600'
          },
          warning: {
            color: '[.checked]:border-warning-600'
          },
          error: {
            color: '[.checked]:border-error-600'
          },
          'disabled-light': {
            color: '[.checked]:border-disabled-400'
          },
          'surface-light': {
            color: '[.checked]:border-surface-400'
          },
          'neutral-light': {
            color: '[.checked]:border-neutral-400'
          },
          'primary-light': {
            color: '[.checked]:border-primary-400'
          },
          'secondary-light': {
            color: '[.checked]:border-secondary-400'
          },
          'tertiary-light': {
            color: '[.checked]:border-tertiary-400'
          },
          'success-light': {
            color: '[.checked]:border-success-400'
          },
          'warning-light': {
            color: '[.checked]:border-warning-400'
          },
          'error-light': {
            color: '[.checked]:border-error-400'
          },
          'disabled-on': {
            color: '[.checked]:border-disabled-100'
          },
          'surface-on': {
            color: '[.checked]:border-surface-100'
          },
          'neutral-on': {
            color: '[.checked]:border-neutral-100'
          },
          'primary-on': {
            color: '[.checked]:border-primary-100'
          },
          'secondary-on': {
            color: '[.checked]:border-secondary-100'
          },
          'tertiary-on': {
            color: '[.checked]:border-tertiary-100'
          },
          'success-on': {
            color: '[.checked]:border-success-100'
          },
          'warning-on': {
            color: '[.checked]:border-warning-100'
          },
          'error-on': {
            color: '[.checked]:border-error-100'
          }
        }
      },
      text: {
        light: {
          disabled: {
            color: '[.checked]:text-disabled-500'
          },
          surface: {
            color: '[.checked]:text-surface-500'
          },
          neutral: {
            color: '[.checked]:text-neutral-500'
          },
          primary: {
            color: '[.checked]:text-primary-500'
          },
          secondary: {
            color: '[.checked]:text-secondary-500'
          },
          tertiary: {
            color: '[.checked]:text-tertiary-500'
          },
          success: {
            color: '[.checked]:text-success-500'
          },
          warning: {
            color: '[.checked]:text-warning-500'
          },
          error: {
            color: '[.checked]:text-error-500'
          },
          'disabled-light': {
            color: '[.checked]:text-disabled-300'
          },
          'surface-light': {
            color: '[.checked]:text-surface-300'
          },
          'neutral-light': {
            color: '[.checked]:text-neutral-300'
          },
          'primary-light': {
            color: '[.checked]:text-primary-300'
          },
          'secondary-light': {
            color: '[.checked]:text-secondary-300'
          },
          'tertiary-light': {
            color: '[.checked]:text-tertiary-300'
          },
          'success-light': {
            color: '[.checked]:text-success-300'
          },
          'warning-light': {
            color: '[.checked]:text-warning-300'
          },
          'error-light': {
            color: '[.checked]:text-error-300'
          },
          'disabled-on': {
            color: '[.checked]:text-disabled-50'
          },
          'surface-on': {
            color: '[.checked]:text-surface-50'
          },
          'neutral-on': {
            color: '[.checked]:text-neutral-50'
          },
          'primary-on': {
            color: '[.checked]:text-primary-50'
          },
          'secondary-on': {
            color: '[.checked]:text-secondary-50'
          },
          'tertiary-on': {
            color: '[.checked]:text-tertiary-50'
          },
          'success-on': {
            color: '[.checked]:text-success-50'
          },
          'warning-on': {
            color: '[.checked]:text-warning-50'
          },
          'error-on': {
            color: '[.checked]:text-error-50'
          }
        },
        dark: {
          disabled: {
            color: '[.checked]:text-disabled-600'
          },
          surface: {
            color: '[.checked]:text-surface-600'
          },
          neutral: {
            color: '[.checked]:text-neutral-600'
          },
          primary: {
            color: '[.checked]:text-primary-600'
          },
          secondary: {
            color: '[.checked]:text-secondary-600'
          },
          tertiary: {
            color: '[.checked]:text-tertiary-600'
          },
          success: {
            color: '[.checked]:text-success-600'
          },
          warning: {
            color: '[.checked]:text-warning-600'
          },
          error: {
            color: '[.checked]:text-error-600'
          },
          'disabled-light': {
            color: '[.checked]:text-disabled-400'
          },
          'surface-light': {
            color: '[.checked]:text-surface-400'
          },
          'neutral-light': {
            color: '[.checked]:text-neutral-400'
          },
          'primary-light': {
            color: '[.checked]:text-primary-400'
          },
          'secondary-light': {
            color: '[.checked]:text-secondary-400'
          },
          'tertiary-light': {
            color: '[.checked]:text-tertiary-400'
          },
          'success-light': {
            color: '[.checked]:text-success-400'
          },
          'warning-light': {
            color: '[.checked]:text-warning-400'
          },
          'error-light': {
            color: '[.checked]:text-error-400'
          },
          'disabled-on': {
            color: '[.checked]:text-disabled-100'
          },
          'surface-on': {
            color: '[.checked]:text-surface-100'
          },
          'neutral-on': {
            color: '[.checked]:text-neutral-100'
          },
          'primary-on': {
            color: '[.checked]:text-primary-100'
          },
          'secondary-on': {
            color: '[.checked]:text-secondary-100'
          },
          'tertiary-on': {
            color: '[.checked]:text-tertiary-100'
          },
          'success-on': {
            color: '[.checked]:text-success-100'
          },
          'warning-on': {
            color: '[.checked]:text-warning-100'
          },
          'error-on': {
            color: '[.checked]:text-error-100'
          }
        }
      },
      fill: {
        light: {
          disabled: {
            color: '[.checked]:fill-disabled-500'
          },
          surface: {
            color: '[.checked]:fill-surface-500'
          },
          neutral: {
            color: '[.checked]:fill-neutral-500'
          },
          primary: {
            color: '[.checked]:fill-primary-500'
          },
          secondary: {
            color: '[.checked]:fill-secondary-500'
          },
          tertiary: {
            color: '[.checked]:fill-tertiary-500'
          },
          success: {
            color: '[.checked]:fill-success-500'
          },
          warning: {
            color: '[.checked]:fill-warning-500'
          },
          error: {
            color: '[.checked]:fill-error-500'
          },
          'disabled-light': {
            color: '[.checked]:fill-disabled-300'
          },
          'surface-light': {
            color: '[.checked]:fill-surface-300'
          },
          'neutral-light': {
            color: '[.checked]:fill-neutral-300'
          },
          'primary-light': {
            color: '[.checked]:fill-primary-300'
          },
          'secondary-light': {
            color: '[.checked]:fill-secondary-300'
          },
          'tertiary-light': {
            color: '[.checked]:fill-tertiary-300'
          },
          'success-light': {
            color: '[.checked]:fill-success-300'
          },
          'warning-light': {
            color: '[.checked]:fill-warning-300'
          },
          'error-light': {
            color: '[.checked]:fill-error-300'
          },
          'disabled-on': {
            color: '[.checked]:fill-disabled-50'
          },
          'surface-on': {
            color: '[.checked]:fill-surface-50'
          },
          'neutral-on': {
            color: '[.checked]:fill-neutral-50'
          },
          'primary-on': {
            color: '[.checked]:fill-primary-50'
          },
          'secondary-on': {
            color: '[.checked]:fill-secondary-50'
          },
          'tertiary-on': {
            color: '[.checked]:fill-tertiary-50'
          },
          'success-on': {
            color: '[.checked]:fill-success-50'
          },
          'warning-on': {
            color: '[.checked]:fill-warning-50'
          },
          'error-on': {
            color: '[.checked]:fill-error-50'
          }
        },
        dark: {
          disabled: {
            color: '[.checked]:fill-disabled-600'
          },
          surface: {
            color: '[.checked]:fill-surface-600'
          },
          neutral: {
            color: '[.checked]:fill-neutral-600'
          },
          primary: {
            color: '[.checked]:fill-primary-600'
          },
          secondary: {
            color: '[.checked]:fill-secondary-600'
          },
          tertiary: {
            color: '[.checked]:fill-tertiary-600'
          },
          success: {
            color: '[.checked]:fill-success-600'
          },
          warning: {
            color: '[.checked]:fill-warning-600'
          },
          error: {
            color: '[.checked]:fill-error-600'
          },
          'disabled-light': {
            color: '[.checked]:fill-disabled-400'
          },
          'surface-light': {
            color: '[.checked]:fill-surface-400'
          },
          'neutral-light': {
            color: '[.checked]:fill-neutral-400'
          },
          'primary-light': {
            color: '[.checked]:fill-primary-400'
          },
          'secondary-light': {
            color: '[.checked]:fill-secondary-400'
          },
          'tertiary-light': {
            color: '[.checked]:fill-tertiary-400'
          },
          'success-light': {
            color: '[.checked]:fill-success-400'
          },
          'warning-light': {
            color: '[.checked]:fill-warning-400'
          },
          'error-light': {
            color: '[.checked]:fill-error-400'
          },
          'disabled-on': {
            color: '[.checked]:fill-disabled-100'
          },
          'surface-on': {
            color: '[.checked]:fill-surface-100'
          },
          'neutral-on': {
            color: '[.checked]:fill-neutral-100'
          },
          'primary-on': {
            color: '[.checked]:fill-primary-100'
          },
          'secondary-on': {
            color: '[.checked]:fill-secondary-100'
          },
          'tertiary-on': {
            color: '[.checked]:fill-tertiary-100'
          },
          'success-on': {
            color: '[.checked]:fill-success-100'
          },
          'warning-on': {
            color: '[.checked]:fill-warning-100'
          },
          'error-on': {
            color: '[.checked]:fill-error-100'
          }
        }
      },
      ring: {
        light: {
          disabled: {
            color: '[.checked]:ring-disabled-500'
          },
          surface: {
            color: '[.checked]:ring-surface-500'
          },
          neutral: {
            color: '[.checked]:ring-neutral-500'
          },
          primary: {
            color: '[.checked]:ring-primary-500'
          },
          secondary: {
            color: '[.checked]:ring-secondary-500'
          },
          tertiary: {
            color: '[.checked]:ring-tertiary-500'
          },
          success: {
            color: '[.checked]:ring-success-500'
          },
          warning: {
            color: '[.checked]:ring-warning-500'
          },
          error: {
            color: '[.checked]:ring-error-500'
          },
          'disabled-light': {
            color: '[.checked]:ring-disabled-300'
          },
          'surface-light': {
            color: '[.checked]:ring-surface-300'
          },
          'neutral-light': {
            color: '[.checked]:ring-neutral-300'
          },
          'primary-light': {
            color: '[.checked]:ring-primary-300'
          },
          'secondary-light': {
            color: '[.checked]:ring-secondary-300'
          },
          'tertiary-light': {
            color: '[.checked]:ring-tertiary-300'
          },
          'success-light': {
            color: '[.checked]:ring-success-300'
          },
          'warning-light': {
            color: '[.checked]:ring-warning-300'
          },
          'error-light': {
            color: '[.checked]:ring-error-300'
          },
          'disabled-on': {
            color: '[.checked]:ring-disabled-50'
          },
          'surface-on': {
            color: '[.checked]:ring-surface-50'
          },
          'neutral-on': {
            color: '[.checked]:ring-neutral-50'
          },
          'primary-on': {
            color: '[.checked]:ring-primary-50'
          },
          'secondary-on': {
            color: '[.checked]:ring-secondary-50'
          },
          'tertiary-on': {
            color: '[.checked]:ring-tertiary-50'
          },
          'success-on': {
            color: '[.checked]:ring-success-50'
          },
          'warning-on': {
            color: '[.checked]:ring-warning-50'
          },
          'error-on': {
            color: '[.checked]:ring-error-50'
          }
        },
        dark: {
          disabled: {
            color: '[.checked]:ring-disabled-600'
          },
          surface: {
            color: '[.checked]:ring-surface-600'
          },
          neutral: {
            color: '[.checked]:ring-neutral-600'
          },
          primary: {
            color: '[.checked]:ring-primary-600'
          },
          secondary: {
            color: '[.checked]:ring-secondary-600'
          },
          tertiary: {
            color: '[.checked]:ring-tertiary-600'
          },
          success: {
            color: '[.checked]:ring-success-600'
          },
          warning: {
            color: '[.checked]:ring-warning-600'
          },
          error: {
            color: '[.checked]:ring-error-600'
          },
          'disabled-light': {
            color: '[.checked]:ring-disabled-400'
          },
          'surface-light': {
            color: '[.checked]:ring-surface-400'
          },
          'neutral-light': {
            color: '[.checked]:ring-neutral-400'
          },
          'primary-light': {
            color: '[.checked]:ring-primary-400'
          },
          'secondary-light': {
            color: '[.checked]:ring-secondary-400'
          },
          'tertiary-light': {
            color: '[.checked]:ring-tertiary-400'
          },
          'success-light': {
            color: '[.checked]:ring-success-400'
          },
          'warning-light': {
            color: '[.checked]:ring-warning-400'
          },
          'error-light': {
            color: '[.checked]:ring-error-400'
          },
          'disabled-on': {
            color: '[.checked]:ring-disabled-100'
          },
          'surface-on': {
            color: '[.checked]:ring-surface-100'
          },
          'neutral-on': {
            color: '[.checked]:ring-neutral-100'
          },
          'primary-on': {
            color: '[.checked]:ring-primary-100'
          },
          'secondary-on': {
            color: '[.checked]:ring-secondary-100'
          },
          'tertiary-on': {
            color: '[.checked]:ring-tertiary-100'
          },
          'success-on': {
            color: '[.checked]:ring-success-100'
          },
          'warning-on': {
            color: '[.checked]:ring-warning-100'
          },
          'error-on': {
            color: '[.checked]:ring-error-100'
          }
        }
      }
    }
  },
  gap: {
    all: {
      none: {
        gap: 'gap-0'
      },
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
      },
      'xs-xs': {
        gap: 'gap-1'
      },
      'sm-sm': {
        gap: 'gap-2'
      },
      'md-md': {
        gap: 'gap-3'
      },
      'lg-lg': {
        gap: 'gap-4'
      },
      'xl-xl': {
        gap: 'gap-6'
      },
      'xxl-xxl': {
        gap: 'gap-8'
      }
    },
    x: {
      none: {
        gap: 'gap-x-0'
      },
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
      },
      'xs-xs': {
        gap: 'gap-x-1'
      },
      'sm-sm': {
        gap: 'gap-x-2'
      },
      'md-md': {
        gap: 'gap-x-3'
      },
      'lg-lg': {
        gap: 'gap-x-4'
      },
      'xl-xl': {
        gap: 'gap-x-6'
      },
      'xxl-xxl': {
        gap: 'gap-x-8'
      }
    },
    y: {
      none: {
        gap: 'gap-y-0'
      },
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
      },
      'xs-xs': {
        gap: 'gap-y-1'
      },
      'sm-sm': {
        gap: 'gap-y-2'
      },
      'md-md': {
        gap: 'gap-y-3'
      },
      'lg-lg': {
        gap: 'gap-y-4'
      },
      'xl-xl': {
        gap: 'gap-y-6'
      },
      'xxl-xxl': {
        gap: 'gap-y-8'
      }
    }
  }
};
