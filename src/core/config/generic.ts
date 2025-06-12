import type {
  AlignItems,
  Color,
  CSSProps,
  Direction,
  Gap,
  JustifyContent,
  Margin,
  Radius,
  ScaleSizes,
  ScaleWidth,
  Spacing,
  Wrap
} from '../types';

type Display = 'block' | 'flex' | 'grid' | 'inline-flex';
type Border =
  | 'none'
  | 'all'
  | 'x'
  | 'y'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'x-top'
  | 'x-bottom'
  | 'y-left'
  | 'y-right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';
type DefaultRadius = 'sm' | 'md' | 'lg';
type MergedColor = 'disabled' | 'surface' | Color;
type GapDirection = 'default' | 'row' | 'col';

type Generic = {
  styles: {
    display: Record<Display, CSSProps>;
    scale: Record<ScaleWidth, CSSProps>;
    spacing: {
      default: Record<ScaleSizes, Record<Spacing, CSSProps>>;
    };
    margin: Record<Margin, CSSProps>;
    border: Record<Border, CSSProps>;
    radius: Record<DefaultRadius, Record<Radius, CSSProps>>;
    color: {
      bg: Record<MergedColor, Record<string, CSSProps>>;
      border: Record<MergedColor, Record<string, CSSProps>>;
      text: Record<MergedColor, Record<string, CSSProps>>;
      fill: Record<MergedColor, Record<string, CSSProps>>;
      ring: Record<MergedColor, Record<string, CSSProps>>;
    };
    direction: Record<Direction, CSSProps>;
    wrap: Record<Wrap, CSSProps>;
    justify: Record<JustifyContent, CSSProps>;
    align: Record<AlignItems, CSSProps>;
    gap: Record<GapDirection, Record<Gap, CSSProps>>;
  };
};

export const generic: Generic = {
  styles: {
    display: {
      block: {},
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
    scale: {
      default: {},
      full: {
        width: 'w-full'
      },
      fit: {
        width: 'w-fit'
      }
    },
    spacing: {
      default: {
        square: {
          none: {},
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
          }
        },
        rect: {
          none: {},
          xs: {
            padding: 'px-2 py-1'
          },
          sm: {
            padding: 'px-4 py-2'
          },
          md: {
            padding: 'px-6 py-3'
          },
          lg: {
            padding: 'px-8 py-4'
          },
          xl: {
            padding: 'px-12 py-6'
          },
          'xs-x': {
            padding: 'px-2'
          },
          'xs-y': {
            padding: 'py-1'
          },
          'xs-top': {
            padding: 'pt-1'
          },
          'xs-bottom': {
            padding: 'pb-1'
          },
          'xs-left': {
            padding: 'pl-2'
          },
          'xs-right': {
            padding: 'pr-2'
          },
          'xs-x-top': {
            padding: 'px-2 pt-1'
          },
          'xs-x-bottom': {
            padding: 'px-2 pb-1'
          },
          'xs-y-left': {
            padding: 'py-1 pl-2'
          },
          'xs-y-right': {
            padding: 'py-1 pr-2'
          },
          'xs-top-left': {
            padding: 'pt-1 pl-2'
          },
          'xs-top-right': {
            padding: 'pt-1 pr-2'
          },
          'xs-bottom-left': {
            padding: 'pb-1 pl-2'
          },
          'xs-bottom-right': {
            padding: 'pb-1 pr-2'
          },
          'sm-x': {
            padding: 'px-4'
          },
          'sm-y': {
            padding: 'py-2'
          },
          'sm-top': {
            padding: 'pt-2'
          },
          'sm-bottom': {
            padding: 'pb-2'
          },
          'sm-left': {
            padding: 'pl-4'
          },
          'sm-right': {
            padding: 'pr-4'
          },
          'sm-x-top': {
            padding: 'px-4 pt-2'
          },
          'sm-x-bottom': {
            padding: 'px-4 pb-2'
          },
          'sm-y-left': {
            padding: 'py-2 pl-4'
          },
          'sm-y-right': {
            padding: 'py-2 pr-4'
          },
          'sm-top-left': {
            padding: 'pt-2 pl-4'
          },
          'sm-top-right': {
            padding: 'pt-2 pr-4'
          },
          'sm-bottom-left': {
            padding: 'pb-2 pl-4'
          },
          'sm-bottom-right': {
            padding: 'pb-2 pr-4'
          },
          'md-x': {
            padding: 'px-6'
          },
          'md-y': {
            padding: 'py-3'
          },
          'md-top': {
            padding: 'pt-3'
          },
          'md-bottom': {
            padding: 'pb-3'
          },
          'md-left': {
            padding: 'pl-6'
          },
          'md-right': {
            padding: 'pr-6'
          },
          'md-x-top': {
            padding: 'px-6 pt-3'
          },
          'md-x-bottom': {
            padding: 'px-6 pb-3'
          },
          'md-y-left': {
            padding: 'py-3 pl-6'
          },
          'md-y-right': {
            padding: 'py-3 pr-6'
          },
          'md-top-left': {
            padding: 'pt-3 pl-6'
          },
          'md-top-right': {
            padding: 'pt-3 pr-6'
          },
          'md-bottom-left': {
            padding: 'pb-3 pl-6'
          },
          'md-bottom-right': {
            padding: 'pb-3 pr-6'
          },
          'lg-x': {
            padding: 'px-8'
          },
          'lg-y': {
            padding: 'py-4'
          },
          'lg-top': {
            padding: 'pt-4'
          },
          'lg-bottom': {
            padding: 'pb-4'
          },
          'lg-left': {
            padding: 'pl-8'
          },
          'lg-right': {
            padding: 'pr-8'
          },
          'lg-x-top': {
            padding: 'px-8 pt-4'
          },
          'lg-x-bottom': {
            padding: 'px-8 pb-4'
          },
          'lg-y-left': {
            padding: 'py-4 pl-8'
          },
          'lg-y-right': {
            padding: 'py-4 pr-8'
          },
          'lg-top-left': {
            padding: 'pt-4 pl-8'
          },
          'lg-top-right': {
            padding: 'pt-4 pr-8'
          },
          'lg-bottom-left': {
            padding: 'pb-4 pl-8'
          },
          'lg-bottom-right': {
            padding: 'pb-4 pr-8'
          },
          'xl-x': {
            padding: 'px-12'
          },
          'xl-y': {
            padding: 'py-6'
          },
          'xl-top': {
            padding: 'pt-6'
          },
          'xl-bottom': {
            padding: 'pb-6'
          },
          'xl-left': {
            padding: 'pl-12'
          },
          'xl-right': {
            padding: 'pr-12'
          },
          'xl-x-top': {
            padding: 'px-12 pt-6'
          },
          'xl-x-bottom': {
            padding: 'px-12 pb-6'
          },
          'xl-y-left': {
            padding: 'py-6 pl-12'
          },
          'xl-y-right': {
            padding: 'py-6 pr-12'
          },
          'xl-top-left': {
            padding: 'pt-6 pl-12'
          },
          'xl-top-right': {
            padding: 'pt-6 pr-12'
          },
          'xl-bottom-left': {
            padding: 'pb-6 pl-12'
          },
          'xl-bottom-right': {
            padding: 'pb-6 pr-12'
          }
        }
      }
    },
    margin: {
      none: {},
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
      none: {},
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
      sm: {
        none: {},
        xs: {
          borderRadius: 'rounded-sm'
        },
        sm: {
          borderRadius: 'rounded'
        },
        md: {
          borderRadius: 'rounded-md'
        },
        lg: {
          borderRadius: 'rounded-lg'
        },
        xl: {
          borderRadius: 'rounded-xl'
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
          borderRadius: 'rounded-br-sm'
        },
        'sm-top': {
          borderRadius: 'rounded-t'
        },
        'sm-bottom': {
          borderRadius: 'rounded-b'
        },
        'sm-left': {
          borderRadius: 'rounded-l'
        },
        'sm-right': {
          borderRadius: 'rounded-r'
        },
        'sm-top-left': {
          borderRadius: 'rounded-tl'
        },
        'sm-top-right': {
          borderRadius: 'rounded-tr'
        },
        'sm-bottom-left': {
          borderRadius: 'rounded-bl'
        },
        'sm-bottom-right': {
          borderRadius: 'rounded-br'
        },
        'md-top': {
          borderRadius: 'rounded-t-md'
        },
        'md-bottom': {
          borderRadius: 'rounded-b-md'
        },
        'md-left': {
          borderRadius: 'rounded-l-md'
        },
        'md-right': {
          borderRadius: 'rounded-r-md'
        },
        'md-top-left': {
          borderRadius: 'rounded-tl-md'
        },
        'md-top-right': {
          borderRadius: 'rounded-tr-md'
        },
        'md-bottom-left': {
          borderRadius: 'rounded-bl-md'
        },
        'md-bottom-right': {
          borderRadius: 'rounded-br-md'
        },
        'lg-top': {
          borderRadius: 'rounded-t-lg'
        },
        'lg-bottom': {
          borderRadius: 'rounded-b-lg'
        },
        'lg-left': {
          borderRadius: 'rounded-l-lg'
        },
        'lg-right': {
          borderRadius: 'rounded-r-lg'
        },
        'lg-top-left': {
          borderRadius: 'rounded-tl-lg'
        },
        'lg-top-right': {
          borderRadius: 'rounded-tr-lg'
        },
        'lg-bottom-left': {
          borderRadius: 'rounded-bl-lg'
        },
        'lg-bottom-right': {
          borderRadius: 'rounded-br-lg'
        },
        'xl-top': {
          borderRadius: 'rounded-t-xl'
        },
        'xl-bottom': {
          borderRadius: 'rounded-b-xl'
        },
        'xl-left': {
          borderRadius: 'rounded-l-xl'
        },
        'xl-right': {
          borderRadius: 'rounded-r-xl'
        },
        'xl-top-left': {
          borderRadius: 'rounded-tl-xl'
        },
        'xl-top-right': {
          borderRadius: 'rounded-tr-xl'
        },
        'xl-bottom-left': {
          borderRadius: 'rounded-bl-xl'
        },
        'xl-bottom-right': {
          borderRadius: 'rounded-br-xl'
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
      md: {
        none: {},
        xs: {
          borderRadius: 'rounded'
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
        full: {
          borderRadius: 'rounded-full'
        },
        'xs-top': {
          borderRadius: 'rounded-t'
        },
        'xs-bottom': {
          borderRadius: 'rounded-b'
        },
        'xs-left': {
          borderRadius: 'rounded-l'
        },
        'xs-right': {
          borderRadius: 'rounded-r'
        },
        'xs-top-left': {
          borderRadius: 'rounded-tl'
        },
        'xs-top-right': {
          borderRadius: 'rounded-tr'
        },
        'xs-bottom-left': {
          borderRadius: 'rounded-bl'
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
      lg: {
        none: {},
        xs: {
          borderRadius: 'rounded-md'
        },
        sm: {
          borderRadius: 'rounded-lg'
        },
        md: {
          borderRadius: 'rounded-xl'
        },
        lg: {
          borderRadius: 'rounded-2xl'
        },
        xl: {
          borderRadius: 'rounded-3xl'
        },
        full: {
          borderRadius: 'rounded-full'
        },
        'xs-top': {
          borderRadius: 'rounded-t-md'
        },
        'xs-bottom': {
          borderRadius: 'rounded-b-md'
        },
        'xs-left': {
          borderRadius: 'rounded-l-md'
        },
        'xs-right': {
          borderRadius: 'rounded-r-md'
        },
        'xs-top-left': {
          borderRadius: 'rounded-tl-md'
        },
        'xs-top-right': {
          borderRadius: 'rounded-tr-md'
        },
        'xs-bottom-left': {
          borderRadius: 'rounded-bl-md'
        },
        'xs-bottom-right': {
          borderRadius: 'rounded-br-md'
        },
        'sm-top': {
          borderRadius: 'rounded-t-lg'
        },
        'sm-bottom': {
          borderRadius: 'rounded-b-lg'
        },
        'sm-left': {
          borderRadius: 'rounded-l-lg'
        },
        'sm-right': {
          borderRadius: 'rounded-r-lg'
        },
        'sm-top-left': {
          borderRadius: 'rounded-tl-lg'
        },
        'sm-top-right': {
          borderRadius: 'rounded-tr-lg'
        },
        'sm-bottom-left': {
          borderRadius: 'rounded-bl-lg'
        },
        'sm-bottom-right': {
          borderRadius: 'rounded-br-lg'
        },
        'md-top': {
          borderRadius: 'rounded-t-xl'
        },
        'md-bottom': {
          borderRadius: 'rounded-b-xl'
        },
        'md-left': {
          borderRadius: 'rounded-l-xl'
        },
        'md-right': {
          borderRadius: 'rounded-r-xl'
        },
        'md-top-left': {
          borderRadius: 'rounded-tl-xl'
        },
        'md-top-right': {
          borderRadius: 'rounded-tr-xl'
        },
        'md-bottom-left': {
          borderRadius: 'rounded-bl-xl'
        },
        'md-bottom-right': {
          borderRadius: 'rounded-br-xl'
        },
        'lg-top': {
          borderRadius: 'rounded-t-2xl'
        },
        'lg-bottom': {
          borderRadius: 'rounded-b-2xl'
        },
        'lg-left': {
          borderRadius: 'rounded-l-2xl'
        },
        'lg-right': {
          borderRadius: 'rounded-r-2xl'
        },
        'lg-top-left': {
          borderRadius: 'rounded-tl-2xl'
        },
        'lg-top-right': {
          borderRadius: 'rounded-tr-2xl'
        },
        'lg-bottom-left': {
          borderRadius: 'rounded-bl-2xl'
        },
        'lg-bottom-right': {
          borderRadius: 'rounded-br-2xl'
        },
        'xl-top': {
          borderRadius: 'rounded-t-3xl'
        },
        'xl-bottom': {
          borderRadius: 'rounded-b-3xl'
        },
        'xl-left': {
          borderRadius: 'rounded-l-3xl'
        },
        'xl-right': {
          borderRadius: 'rounded-r-3xl'
        },
        'xl-top-left': {
          borderRadius: 'rounded-tl-3xl'
        },
        'xl-top-right': {
          borderRadius: 'rounded-tr-3xl'
        },
        'xl-bottom-left': {
          borderRadius: 'rounded-bl-3xl'
        },
        'xl-bottom-right': {
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
      }
    },
    color: {
      bg: {
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
      border: {
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
      text: {
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
      fill: {
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
      ring: {
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
      }
    },
    direction: {
    row: {},
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
  wrap: {
    nowrap: {},
    wrap: {
      flexWrap: 'flex-wrap'
    },
    'wrap-reverse': {
      flexWrap: 'flex-wrap-reverse'
    }
  },
  justify: {
    normal: {},
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
  align: {
    stretch: {},
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
      none: {},
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
      none: {},
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
      none: {},
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
  }
  }
};
