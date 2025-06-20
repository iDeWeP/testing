import type {
  Color,
  CSSProps,
  Size,
  Scale,
  Margin,
  Weight,
  Underline,
  WordBreak,
  TextWrap,
  TextAlign,
  TextOverflow,
  Direction,
  Wrap,
  JustifyContent,
  AlignItems,
  Gap,
  Effect
} from '../types';

type Focusable = 'none' | 'default' | 'disabled';
type Loading = 'none' | 'normal' | 'hide';
type Display = 'block' | 'flex' | 'grid' | 'inline-flex';
type Position = 'static' | 'absolute' | 'fixed' | 'relative';
type DefaultSize = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type SizeScale = 'normal' | 'square';
type Spacing =
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xs-x'
  | 'xs-y'
  | 'xs-top'
  | 'xs-bottom'
  | 'xs-left'
  | 'xs-right'
  | 'xs-x-top'
  | 'xs-x-bottom'
  | 'xs-y-left'
  | 'xs-y-right'
  | 'xs-top-left'
  | 'xs-top-right'
  | 'xs-bottom-left'
  | 'xs-bottom-right'
  | 'sm-x'
  | 'sm-y'
  | 'sm-top'
  | 'sm-bottom'
  | 'sm-left'
  | 'sm-right'
  | 'sm-x-top'
  | 'sm-x-bottom'
  | 'sm-y-left'
  | 'sm-y-right'
  | 'sm-top-left'
  | 'sm-top-right'
  | 'sm-bottom-left'
  | 'sm-bottom-right'
  | 'md-x'
  | 'md-y'
  | 'md-top'
  | 'md-bottom'
  | 'md-left'
  | 'md-right'
  | 'md-x-top'
  | 'md-x-bottom'
  | 'md-y-left'
  | 'md-y-right'
  | 'md-top-left'
  | 'md-top-right'
  | 'md-bottom-left'
  | 'md-bottom-right'
  | 'lg-x'
  | 'lg-y'
  | 'lg-top'
  | 'lg-bottom'
  | 'lg-left'
  | 'lg-right'
  | 'lg-x-top'
  | 'lg-x-bottom'
  | 'lg-y-left'
  | 'lg-y-right'
  | 'lg-top-left'
  | 'lg-top-right'
  | 'lg-bottom-left'
  | 'lg-bottom-right'
  | 'xl-x'
  | 'xl-y'
  | 'xl-top'
  | 'xl-bottom'
  | 'xl-left'
  | 'xl-right'
  | 'xl-x-top'
  | 'xl-x-bottom'
  | 'xl-y-left'
  | 'xl-y-right'
  | 'xl-top-left'
  | 'xl-top-right'
  | 'xl-bottom-left'
  | 'xl-bottom-right'
  | 'xxl-x'
  | 'xxl-y'
  | 'xxl-top'
  | 'xxl-bottom'
  | 'xxl-left'
  | 'xxl-right'
  | 'xxl-x-top'
  | 'xxl-x-bottom'
  | 'xxl-y-left'
  | 'xxl-y-right'
  | 'xxl-top-left'
  | 'xxl-top-right'
  | 'xxl-bottom-left'
  | 'xxl-bottom-right'
  | 'xs-xs'
  | 'sm-sm'
  | 'md-md'
  | 'lg-lg'
  | 'xl-xl'
  | 'xxl-xxl'
  | 'xs-xs-x'
  | 'xs-xs-y'
  | 'xs-xs-top'
  | 'xs-xs-bottom'
  | 'xs-xs-left'
  | 'xs-xs-right'
  | 'xs-xs-x-top'
  | 'xs-xs-x-bottom'
  | 'xs-xs-y-left'
  | 'xs-xs-y-right'
  | 'xs-xs-top-left'
  | 'xs-xs-top-right'
  | 'xs-xs-bottom-left'
  | 'xs-xs-bottom-right'
  | 'sm-sm-x'
  | 'sm-sm-y'
  | 'sm-sm-top'
  | 'sm-sm-bottom'
  | 'sm-sm-left'
  | 'sm-sm-right'
  | 'sm-sm-x-top'
  | 'sm-sm-x-bottom'
  | 'sm-sm-y-left'
  | 'sm-sm-y-right'
  | 'sm-sm-top-left'
  | 'sm-sm-top-right'
  | 'sm-sm-bottom-left'
  | 'sm-sm-bottom-right'
  | 'md-md-x'
  | 'md-md-y'
  | 'md-md-top'
  | 'md-md-bottom'
  | 'md-md-left'
  | 'md-md-right'
  | 'md-md-x-top'
  | 'md-md-x-bottom'
  | 'md-md-y-left'
  | 'md-md-y-right'
  | 'md-md-top-left'
  | 'md-md-top-right'
  | 'md-md-bottom-left'
  | 'md-md-bottom-right'
  | 'lg-lg-x'
  | 'lg-lg-y'
  | 'lg-lg-top'
  | 'lg-lg-bottom'
  | 'lg-lg-left'
  | 'lg-lg-right'
  | 'lg-lg-x-top'
  | 'lg-lg-x-bottom'
  | 'lg-lg-y-left'
  | 'lg-lg-y-right'
  | 'lg-lg-top-left'
  | 'lg-lg-top-right'
  | 'lg-lg-bottom-left'
  | 'lg-lg-bottom-right'
  | 'xl-xl-x'
  | 'xl-xl-y'
  | 'xl-xl-top'
  | 'xl-xl-bottom'
  | 'xl-xl-left'
  | 'xl-xl-right'
  | 'xl-xl-x-top'
  | 'xl-xl-x-bottom'
  | 'xl-xl-y-left'
  | 'xl-xl-y-right'
  | 'xl-xl-top-left'
  | 'xl-xl-top-right'
  | 'xl-xl-bottom-left'
  | 'xl-xl-bottom-right'
  | 'xxl-xxl-x'
  | 'xxl-xxl-y'
  | 'xxl-xxl-top'
  | 'xxl-xxl-bottom'
  | 'xxl-xxl-left'
  | 'xxl-xxl-right'
  | 'xxl-xxl-x-top'
  | 'xxl-xxl-x-bottom'
  | 'xxl-xxl-y-left'
  | 'xxl-xxl-y-right'
  | 'xxl-xxl-top-left'
  | 'xxl-xxl-top-right'
  | 'xxl-xxl-bottom-left'
  | 'xxl-xxl-bottom-right';
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
type Radius =
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'full'
  | 'xs-top'
  | 'xs-bottom'
  | 'xs-left'
  | 'xs-right'
  | 'xs-top-left'
  | 'xs-top-right'
  | 'xs-bottom-left'
  | 'xs-bottom-right'
  | 'sm-top'
  | 'sm-bottom'
  | 'sm-left'
  | 'sm-right'
  | 'sm-top-left'
  | 'sm-top-right'
  | 'sm-bottom-left'
  | 'sm-bottom-right'
  | 'md-top'
  | 'md-bottom'
  | 'md-left'
  | 'md-right'
  | 'md-top-left'
  | 'md-top-right'
  | 'md-bottom-left'
  | 'md-bottom-right'
  | 'lg-top'
  | 'lg-bottom'
  | 'lg-left'
  | 'lg-right'
  | 'lg-top-left'
  | 'lg-top-right'
  | 'lg-bottom-left'
  | 'lg-bottom-right'
  | 'xl-top'
  | 'xl-bottom'
  | 'xl-left'
  | 'xl-right'
  | 'xl-top-left'
  | 'xl-top-right'
  | 'xl-bottom-left'
  | 'xl-bottom-right'
  | 'full-top'
  | 'full-bottom'
  | 'full-left'
  | 'full-right'
  | 'full-top-left'
  | 'full-top-right'
  | 'full-bottom-left'
  | 'full-bottom-right';
type DefaultRadius = 'sm' | 'md' | 'lg';
type MergedColor = 'disabled' | Color;
type ColorType = 'bg' | 'border' | 'text' | 'fill' | 'stroke' | 'ring';
type GapDirection = 'default' | 'row' | 'col';
type Transition =
  | 'fade'
  | 'transform'
  | 'transform-fade'
  | 'collapse-x'
  | 'collapse-x-fade'
  | 'collapse-y'
  | 'collapse-y-fade';
type Cursor = 'none' | 'pointer' | 'disabled';

type Generic = {
  styles: {
    focusable: Record<Focusable, CSSProps>;
    loading: Record<Loading, CSSProps>;
    display: Record<Display, CSSProps>;
    position: Record<Position, CSSProps>;
    size: {
      normal: Record<DefaultSize, Record<SizeScale, CSSProps>>;
      text: Record<DefaultSize, Record<SizeScale, CSSProps>>;
      font: Record<Size, CSSProps>;
      title: Record<Size, CSSProps>;
    };
    scale: Record<Scale, CSSProps>;
    spacing: {
      normal: Record<Size, Record<SpacingScale, CSSProps>>;
      container: Record<Spacing, CSSProps>;
    };
    margin: Record<Margin, CSSProps>;
    border: Record<Border, CSSProps>;
    radius: Record<DefaultRadius, Record<Radius, CSSProps>>;
    weight: Record<Weight, CSSProps>;
    underline: Record<Underline, CSSProps>;
    wordBreak: Record<WordBreak, CSSProps>;
    textWrap: Record<TextWrap, CSSProps>;
    textAlign: Record<TextAlign, CSSProps>;
    textOverflow: Record<TextOverflow, CSSProps>;
    color: Record<ColorType, Record<MergedColor, Record<string, CSSProps>>>;
    direction: Record<Direction, CSSProps>;
    wrap: Record<Wrap, CSSProps>;
    justify: Record<JustifyContent, CSSProps>;
    align: Record<AlignItems, CSSProps>;
    gap: Record<GapDirection, Record<Gap, CSSProps>>;
    effect: Record<Effect, CSSProps>;
    transition: Record<Transition, CSSProps>;
    cursor: Record<Cursor, CSSProps>;
  };
};

export const generic: Generic = {
  styles: {
    focusable: {
      none: {},
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
      none: {},
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
        none: {
          normal: {},
          square: {}
        },
        xs: {
          normal: {
            height: 'h-5'
          },
          square: {
            width: 'w-5',
            height: 'h-5'
          }
        },
        sm: {
          normal: {
            height: 'h-8'
          },
          square: {
            width: 'w-8',
            height: 'h-8'
          }
        },
        md: {
          normal: {
            height: 'h-10'
          },
          square: {
            width: 'w-10',
            height: 'h-10'
          }
        },
        lg: {
          normal: {
            height: 'h-12'
          },
          square: {
            width: 'w-12',
            height: 'h-12'
          }
        },
        xl: {
          normal: {
            height: 'h-16'
          },
          square: {
            width: 'w-16',
            height: 'h-16'
          }
        },
        xxl: {
          normal: {
            height: 'h-20'
          },
          square: {
            width: 'w-20',
            height: 'h-20'
          }
        }
      },
      text: {
        none: {
          normal: {},
          square: {}
        },
        xs: {
          normal: {
            height: 'h-3'
          },
          square: {
            width: 'w-3',
            height: 'h-3'
          }
        },
        sm: {
          normal: {
            height: 'h-4'
          },
          square: {
            width: 'w-4',
            height: 'h-4'
          }
        },
        md: {
          normal: {
            height: 'h-5'
          },
          square: {
            width: 'w-5',
            height: 'h-5'
          }
        },
        lg: {
          normal: {
            height: 'h-6'
          },
          square: {
            width: 'w-6',
            height: 'h-6'
          }
        },
        xl: {
          normal: {
            height: 'h-7'
          },
          square: {
            width: 'w-7',
            height: 'h-7'
          }
        },
        xxl: {
          normal: {
            height: 'h-8'
          },
          square: {
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
      normal: {},
      full: {
        width: 'w-full'
      },
      fit: {
        width: 'w-fit'
      }
    },
    spacing: {
      normal: {
        xs: {
          normal: {
            padding: 'px-2 py-1'
          },
          square: {
            padding: 'p-1'
          },
          border: {
            padding: 'px-1.75 py-0.75'
          },
          'border-square': {
            padding: 'p-0.75'
          },
          'border-y': {
            padding: 'px-2 py-0.75'
          },
          'border-square-y': {
            padding: 'px-1 py-0.75'
          },
          'border-y-left': {
            padding: 'pl-1.75 pr-2 py-0.75'
          },
          'border-square-y-left': {
            padding: 'pl-0.75 pr-1 py-0.75'
          },
          'border-y-right': {
            padding: 'pl-2 pr-1.75 py-0.75'
          },
          'border-square-y-right': {
            padding: 'pl-1 pr-0.75 py-0.75'
          }
        },
        sm: {
          normal: {
            padding: 'px-4 py-2'
          },
          square: {
            padding: 'p-2'
          },
          border: {
            padding: 'px-3.75 py-1.75'
          },
          'border-square': {
            padding: 'p-1.75'
          },
          'border-y': {
            padding: 'px-4 py-1.75'
          },
          'border-square-y': {
            padding: 'px-2 py-1.75'
          },
          'border-y-left': {
            padding: 'pl-3.75 pr-4 py-1.75'
          },
          'border-square-y-left': {
            padding: 'pl-1.75 pr-2 py-1.75'
          },
          'border-y-right': {
            padding: 'pl-4 pr-3.75 py-1.75'
          },
          'border-square-y-right': {
            padding: 'pl-2 pr-1.75 py-1.75'
          }
        },
        md: {
          normal: {
            padding: 'px-5 py-2.5'
          },
          square: {
            padding: 'p-2.5'
          },
          border: {
            padding: 'px-4.75 py-2.25'
          },
          'border-square': {
            padding: 'p-2.25'
          },
          'border-y': {
            padding: 'px-5 py-2.25'
          },
          'border-square-y': {
            padding: 'px-2.5 py-2.25'
          },
          'border-y-left': {
            padding: 'pl-4.75 pr-5 py-2.25'
          },
          'border-square-y-left': {
            padding: 'pl-2.25 pr-2.5 py-2.25'
          },
          'border-y-right': {
            padding: 'pl-5 pr-4.75 py-2.25'
          },
          'border-square-y-right': {
            padding: 'pl-2.5 pr-2.25 py-2.25'
          }
        },
        lg: {
          normal: {
            padding: 'px-6 py-3'
          },
          square: {
            padding: 'p-3'
          },
          border: {
            padding: 'px-5.75 py-2.75'
          },
          'border-square': {
            padding: 'p-2.75'
          },
          'border-y': {
            padding: 'px-6 py-2.75'
          },
          'border-square-y': {
            padding: 'px-3 py-2.75'
          },
          'border-y-left': {
            padding: 'pl-5.75 pr-6 py-2.75'
          },
          'border-square-y-left': {
            padding: 'pl-2.75 pr-3 py-2.75'
          },
          'border-y-right': {
            padding: 'pl-6 pr-5.75 py-2.75'
          },
          'border-square-y-right': {
            padding: 'pl-3 pr-2.75 py-2.75'
          }
        },
        xl: {
          normal: {
            padding: 'px-9 py-4.5'
          },
          square: {
            padding: 'p-4.5'
          },
          border: {
            padding: 'px-8.75 py-4.25'
          },
          'border-square': {
            padding: 'p-4.25'
          },
          'border-y': {
            padding: 'px-9 py-4.25'
          },
          'border-square-y': {
            padding: 'px-4.5 py-4.25'
          },
          'border-y-left': {
            padding: 'pl-8.75 pr-9 py-4.25'
          },
          'border-square-y-left': {
            padding: 'pl-4.25 pr-4.5 py-4.25'
          },
          'border-y-right': {
            padding: 'pl-9 pr-8.75 py-4.25'
          },
          'border-square-y-right': {
            padding: 'pl-4.5 pr-4.25 py-4.25'
          }
        },
        xxl: {
          normal: {
            padding: 'px-12 py-6'
          },
          square: {
            padding: 'p-6'
          },
          border: {
            padding: 'px-11.75 py-5.75'
          },
          'border-square': {
            padding: 'p-5.75'
          },
          'border-y': {
            padding: 'px-12 py-5.75'
          },
          'border-square-y': {
            padding: 'px-6 py-5.75'
          },
          'border-y-left': {
            padding: 'pl-11.75 pr-12 py-5.75'
          },
          'border-square-y-left': {
            padding: 'pl-5.75 pr-6 py-5.75'
          },
          'border-y-right': {
            padding: 'pl-12 pr-11.75 py-5.75'
          },
          'border-square-y-right': {
            padding: 'pl-6 pr-5.75 py-5.75'
          }
        }
      },
      container: {
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
    weight: {
      normal: {},
      semi: {
        font: 'font-semibold'
      },
      bold: {
        font: 'font-bold'
      }
    },
    underline: {
      normal: {},
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
      normal: {},
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
      wrap: {},
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
      left: {},
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
      clip: {},
      truncate: {
        textOverflow: 'truncate'
      },
      ellipsis: {
        textOverflow: 'text-ellipsis'
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
      stroke: {
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
    },
    effect: {
      none: {},
      shadow: {
        boxShadow: 'shadow-md',
        transition: 'transition',
        hover: 'hover:shadow-lg',
        active: 'active:shadow-none',
        focus: 'focus:shadow-none',
        focusVisible: 'focus-visible:shadow-none'
      }
    },
    transition: {
      fade: {
        transition: 'transition-opacity'
      },
      transform: {
        transition: 'transition-transform'
      },
      'transform-fade': {
        transition: 'transition-[transform,_opacity]'
      },
      'collapse-x': {
        display: 'flex',
        overflow: 'overflow-hidden',
        transition: 'transition-width'
      },
      'collapse-y': {
        overflow: 'overflow-hidden',
        transition: 'transition-height'
      },
      'collapse-x-fade': {
        display: 'flex',
        overflow: 'overflow-hidden',
        transition: 'transition-[width,_opacity]'
      },
      'collapse-y-fade': {
        overflow: 'overflow-hidden',
        transition: 'transition-[height,_opacity]'
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
