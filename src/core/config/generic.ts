import type {
  AvatarSize,
  IconSize,
  TextColor,
  Color,
  CSSProps,
  Orientation,
  Display,
  InnerPlacement,
  DefaultSpacing,
  DefaultSize,
  Spacing,
  SidePlacement,
  Gap,
  Margin,
  DefaultBorder,
  Radius,
  Weight,
  Underline,
  TextWrap,
  TextAlign,
  TextOverflow,
  WordBreak,
  Theme,
  Direction,
  Wrap,
  JustifyContent,
  AlignItems,
  Effect
} from '../types';

type Loading = 'none' | 'default' | 'hide';
type Position = 'static' | 'absolute' | 'fixed' | 'relative';
type ExtendedSize = 'none' | AvatarSize;
type Size = IconSize;
type Scale = 'default' | 'screen' | 'full' | 'fit' | 'square';
type DefaultScale = 'default' | 'square';
type Padding = 'default' | 'bordered';
type DefaultRadius = 'sm' | 'md' | 'lg';
type DefaultColor =
  | 'disabled'
  | 'on-disabled'
  | 'soft-neutral'
  | 'soft-primary'
  | 'soft-secondary'
  | 'soft-tertiary'
  | 'soft-success'
  | 'soft-warning'
  | 'soft-error'
  | TextColor;
type BgColor = 'shell' | DefaultColor;
type RingColor = 'disabled' | TextColor;
type FocusColor = 'inherit' | Color;
type GapDirection = 'default' | 'row' | 'col';
type Transition = 'fade' | 'transform' | 'transform-fade';
type Cursor = 'none' | 'pointer' | 'disabled';
type FocusPosition = 'parent' | 'child';
type Focus = 'none' | 'default' | 'disabled';

interface Generic {
  styles: {
    loading: Record<Loading, CSSProps>;
    orientation: Record<Orientation, CSSProps>;
    display: Record<Display, CSSProps>;
    position: Record<Position, CSSProps>;
    placement: Record<InnerPlacement, Record<DefaultSpacing, CSSProps>>;
    size: {
      default: Record<ExtendedSize, Record<DefaultScale, CSSProps>>;
      text: Record<Size, Record<DefaultScale, CSSProps>>;
      font: Record<DefaultSize, CSSProps>;
    };
    scale: Record<Scale, CSSProps>;
    spacing: {
      default: Record<Spacing, CSSProps>;
      button: Record<
        DefaultSize,
        Record<DefaultScale, Record<Padding, CSSProps>>
      >;
      action: Record<
        SidePlacement,
        Record<Size, Record<DefaultSize, Record<Gap, CSSProps>>>
      >;
    };
    gutter: Record<Gap, CSSProps>;
    margin: Record<Margin, CSSProps>;
    border: Record<DefaultBorder, CSSProps>;
    radius: Record<DefaultRadius, Record<Radius, CSSProps>>;
    ring: CSSProps;
    weight: Record<Weight, CSSProps>;
    underline: Record<Underline, CSSProps>;
    textWrap: Record<TextWrap, CSSProps>;
    textAlign: Record<TextAlign, CSSProps>;
    textOverflow: Record<TextOverflow, CSSProps>;
    wordBreak: Record<WordBreak, CSSProps>;
    color: {
      overlay: CSSProps;
      bg: Record<Theme, Record<BgColor, CSSProps>>;
      border: {
        none: CSSProps;
        transparent: CSSProps;
        default: Record<Theme, Record<DefaultColor, CSSProps>>;
      };
      text: Record<Theme, Record<DefaultColor, CSSProps>>;
      fill: Record<Theme, Record<DefaultColor, CSSProps>>;
      ring: Record<Theme, Record<RingColor, CSSProps>>;
      focus: Record<FocusPosition, Record<Theme, Record<FocusColor, CSSProps>>>;
    };
    direction: Record<Direction, CSSProps>;
    wrap: Record<Wrap, CSSProps>;
    justify: Record<JustifyContent, CSSProps>;
    align: Record<AlignItems, CSSProps>;
    gap: Record<GapDirection, Record<Gap, CSSProps>>;
    effect: Record<Effect, CSSProps>;
    transition: Record<Transition, CSSProps>;
    cursor: Record<Cursor, CSSProps>;
    blur: CSSProps;
    focus: Record<Focus, CSSProps>;
  };
}

export const generic: Generic = {
  styles: {
    loading: {
      none: {},
      default: {
        opacity: 'opacity-50'
      },
      hide: {
        opacity: 'opacity-50',
        fill: 'fill-transparent',
        color: 'text-transparent'
      }
    },
    orientation: {
      horizontal: {
        margin: '-space-x-px'
      },
      vertical: {
        margin: '-space-y-px',
        flexDirection: 'flex-col'
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
    placement: {
      top: {
        none: {
          top: 'top-0',
          left: 'left-2/4',
          translate: '-translate-x-2/4'
        },
        xs: {
          top: 'top-2',
          left: 'left-2/4',
          translate: '-translate-x-2/4'
        },
        sm: {
          top: 'top-4',
          left: 'left-2/4',
          translate: '-translate-x-2/4'
        },
        md: {
          top: 'top-6',
          left: 'left-2/4',
          translate: '-translate-x-2/4'
        },
        lg: {
          top: 'top-8',
          left: 'left-2/4',
          translate: '-translate-x-2/4'
        },
        xl: {
          top: 'top-12',
          left: 'left-2/4',
          translate: '-translate-x-2/4'
        },
        'xs-xs': {
          top: 'top-1',
          left: 'left-2/4',
          translate: '-translate-x-2/4'
        },
        'sm-sm': {
          top: 'top-2',
          left: 'left-2/4',
          translate: '-translate-x-2/4'
        },
        'md-md': {
          top: 'top-3',
          left: 'left-2/4',
          translate: '-translate-x-2/4'
        },
        'lg-lg': {
          top: 'top-4',
          left: 'left-2/4',
          translate: '-translate-x-2/4'
        },
        'xl-xl': {
          top: 'top-6',
          left: 'left-2/4',
          translate: '-translate-x-2/4'
        }
      },
      bottom: {
        none: {
          bottom: 'bottom-0',
          left: 'left-2/4',
          translate: '-translate-x-2/4'
        },
        xs: {
          bottom: 'bottom-2',
          left: 'left-2/4',
          translate: '-translate-x-2/4'
        },
        sm: {
          bottom: 'bottom-4',
          left: 'left-2/4',
          translate: '-translate-x-2/4'
        },
        md: {
          bottom: 'bottom-6',
          left: 'left-2/4',
          translate: '-translate-x-2/4'
        },
        lg: {
          bottom: 'bottom-8',
          left: 'left-2/4',
          translate: '-translate-x-2/4'
        },
        xl: {
          bottom: 'bottom-12',
          left: 'left-2/4',
          translate: '-translate-x-2/4'
        },
        'xs-xs': {
          bottom: 'bottom-1',
          left: 'left-2/4',
          translate: '-translate-x-2/4'
        },
        'sm-sm': {
          bottom: 'bottom-2',
          left: 'left-2/4',
          translate: '-translate-x-2/4'
        },
        'md-md': {
          bottom: 'bottom-3',
          left: 'left-2/4',
          translate: '-translate-x-2/4'
        },
        'lg-lg': {
          bottom: 'bottom-4',
          left: 'left-2/4',
          translate: '-translate-x-2/4'
        },
        'xl-xl': {
          bottom: 'bottom-6',
          left: 'left-2/4',
          translate: '-translate-x-2/4'
        }
      },
      left: {
        none: { top: 'top-2/4', left: 'left-0', translate: '-translate-y-2/4' },
        xs: { top: 'top-2/4', left: 'left-2', translate: '-translate-y-2/4' },
        sm: { top: 'top-2/4', left: 'left-4', translate: '-translate-y-2/4' },
        md: { top: 'top-2/4', left: 'left-6', translate: '-translate-y-2/4' },
        lg: { top: 'top-2/4', left: 'left-8', translate: '-translate-y-2/4' },
        xl: { top: 'top-2/4', left: 'left-12', translate: '-translate-y-2/4' },
        'xs-xs': {
          top: 'top-2/4',
          left: 'left-2',
          translate: '-translate-y-2/4'
        },
        'sm-sm': {
          top: 'top-2/4',
          left: 'left-4',
          translate: '-translate-y-2/4'
        },
        'md-md': {
          top: 'top-2/4',
          left: 'left-6',
          translate: '-translate-y-2/4'
        },
        'lg-lg': {
          top: 'top-2/4',
          left: 'left-8',
          translate: '-translate-y-2/4'
        },
        'xl-xl': {
          top: 'top-2/4',
          left: 'left-12',
          translate: '-translate-y-2/4'
        }
      },
      right: {
        none: {
          top: 'top-2/4',
          right: 'right-0',
          translate: '-translate-y-2/4'
        },
        xs: { top: 'top-2/4', right: 'right-2', translate: '-translate-y-2/4' },
        sm: { top: 'top-2/4', right: 'right-4', translate: '-translate-y-2/4' },
        md: { top: 'top-2/4', right: 'right-6', translate: '-translate-y-2/4' },
        lg: { top: 'top-2/4', right: 'right-8', translate: '-translate-y-2/4' },
        xl: {
          top: 'top-2/4',
          right: 'right-12',
          translate: '-translate-y-2/4'
        },
        'xs-xs': {
          top: 'top-2/4',
          right: 'right-2',
          translate: '-translate-y-2/4'
        },
        'sm-sm': {
          top: 'top-2/4',
          right: 'right-4',
          translate: '-translate-y-2/4'
        },
        'md-md': {
          top: 'top-2/4',
          right: 'right-6',
          translate: '-translate-y-2/4'
        },
        'lg-lg': {
          top: 'top-2/4',
          right: 'right-8',
          translate: '-translate-y-2/4'
        },
        'xl-xl': {
          top: 'top-2/4',
          right: 'right-12',
          translate: '-translate-y-2/4'
        }
      },
      'top-left': {
        none: { top: 'top-0', left: 'left-0' },
        xs: { top: 'top-2', left: 'left-2' },
        sm: { top: 'top-4', left: 'left-4' },
        md: { top: 'top-6', left: 'left-6' },
        lg: { top: 'top-8', left: 'left-8' },
        xl: { top: 'top-12', left: 'left-12' },
        'xs-xs': { top: 'top-1', left: 'left-2' },
        'sm-sm': { top: 'top-2', left: 'left-4' },
        'md-md': { top: 'top-3', left: 'left-6' },
        'lg-lg': { top: 'top-4', left: 'left-8' },
        'xl-xl': { top: 'top-6', left: 'left-12' }
      },
      'top-right': {
        none: { top: 'top-0', right: 'right-0' },
        xs: { top: 'top-2', right: 'right-2' },
        sm: { top: 'top-4', right: 'right-4' },
        md: { top: 'top-6', right: 'right-6' },
        lg: { top: 'top-8', right: 'right-8' },
        xl: { top: 'top-12', right: 'right-12' },
        'xs-xs': { top: 'top-1', right: 'right-2' },
        'sm-sm': { top: 'top-2', right: 'right-4' },
        'md-md': { top: 'top-3', right: 'right-6' },
        'lg-lg': { top: 'top-4', right: 'right-8' },
        'xl-xl': { top: 'top-6', right: 'right-12' }
      },
      'bottom-left': {
        none: { bottom: 'bottom-0', left: 'left-0' },
        xs: { bottom: 'bottom-2', left: 'left-2' },
        sm: { bottom: 'bottom-4', left: 'left-4' },
        md: { bottom: 'bottom-6', left: 'left-6' },
        lg: { bottom: 'bottom-8', left: 'left-8' },
        xl: { bottom: 'bottom-12', left: 'left-12' },
        'xs-xs': { bottom: 'bottom-1', left: 'left-2' },
        'sm-sm': { bottom: 'bottom-2', left: 'left-4' },
        'md-md': { bottom: 'bottom-3', left: 'left-6' },
        'lg-lg': { bottom: 'bottom-4', left: 'left-8' },
        'xl-xl': { bottom: 'bottom-6', left: 'left-12' }
      },
      'bottom-right': {
        none: { bottom: 'bottom-0', right: 'right-0' },
        xs: { bottom: 'bottom-2', right: 'right-2' },
        sm: { bottom: 'bottom-4', right: 'right-4' },
        md: { bottom: 'bottom-6', right: 'right-6' },
        lg: { bottom: 'bottom-8', right: 'right-8' },
        xl: { bottom: 'bottom-12', right: 'right-12' },
        'xs-xs': { bottom: 'bottom-1', right: 'right-2' },
        'sm-sm': { bottom: 'bottom-2', right: 'right-4' },
        'md-md': { bottom: 'bottom-3', right: 'right-6' },
        'lg-lg': { bottom: 'bottom-4', right: 'right-8' },
        'xl-xl': { bottom: 'bottom-6', right: 'right-12' }
      }
    },
    size: {
      default: {
        none: {
          default: {},
          square: {}
        },
        xs: {
          default: {
            height: 'h-5'
          },
          square: {
            width: 'w-5',
            height: 'h-5'
          }
        },
        sm: {
          default: {
            height: 'h-8'
          },
          square: {
            width: 'w-8',
            height: 'h-8'
          }
        },
        md: {
          default: {
            height: 'h-10'
          },
          square: {
            width: 'w-10',
            height: 'h-10'
          }
        },
        lg: {
          default: {
            height: 'h-12'
          },
          square: {
            width: 'w-12',
            height: 'h-12'
          }
        },
        xl: {
          default: {
            height: 'h-16'
          },
          square: {
            width: 'w-16',
            height: 'h-16'
          }
        },
        xxl: {
          default: {
            height: 'h-24'
          },
          square: {
            width: 'w-24',
            height: 'h-24'
          }
        }
      },
      text: {
        none: {
          default: {},
          square: {}
        },
        xs: {
          default: {
            height: 'h-3'
          },
          square: {
            width: 'w-3',
            height: 'h-3'
          }
        },
        sm: {
          default: {
            height: 'h-4'
          },
          square: {
            width: 'w-4',
            height: 'h-4'
          }
        },
        md: {
          default: {
            height: 'h-5'
          },
          square: {
            width: 'w-5',
            height: 'h-5'
          }
        },
        lg: {
          default: {
            height: 'h-6'
          },
          square: {
            width: 'w-6',
            height: 'h-6'
          }
        },
        xl: {
          default: {
            height: 'h-7'
          },
          square: {
            width: 'w-7',
            height: 'h-7'
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
        }
      }
    },
    scale: {
      default: {},
      screen: {
        position: 'relative',
        left: 'left-1/2',
        right: 'right-1/2',
        width: 'w-screen',
        margin: 'ml-[-50vw] mr-[-50vw]'
      },
      full: {
        width: 'w-full'
      },
      fit: {
        width: 'w-fit'
      },
      square: {
        overflow: 'overflow-hidden'
      }
    },
    spacing: {
      default: {
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
        }
      },
      button: {
        xs: {
          default: {
            default: {
              padding: 'px-2 py-1'
            },
            bordered: {
              padding: 'px-1.75 py-0.75'
            }
          },
          square: {
            default: {
              padding: 'p-1'
            },
            bordered: {
              padding: 'p-0.75'
            }
          }
        },
        sm: {
          default: {
            default: {
              padding: 'px-4 py-2'
            },
            bordered: {
              padding: 'px-3.75 py-1.75'
            }
          },
          square: {
            default: {
              padding: 'p-2'
            },
            bordered: {
              padding: 'p-1.75'
            }
          }
        },
        md: {
          default: {
            default: {
              padding: 'px-5 py-2.5'
            },
            bordered: {
              padding: 'px-4.75 py-2.25'
            }
          },
          square: {
            default: {
              padding: 'p-2.5'
            },
            bordered: {
              padding: 'p-2.25'
            }
          }
        },
        lg: {
          default: {
            default: {
              padding: 'px-6 py-3'
            },
            bordered: {
              padding: 'px-5.75 py-2.75'
            }
          },
          square: {
            default: {
              padding: 'p-3'
            },
            bordered: {
              padding: 'p-2.75'
            }
          }
        },
        xl: {
          default: {
            default: {
              padding: 'px-9 py-4.5'
            },
            bordered: {
              padding: 'px-8.75 py-4.25'
            }
          },
          square: {
            default: {
              padding: 'p-4.5'
            },
            bordered: {
              padding: 'p-4.25'
            }
          }
        }
      },
      action: {
        left: {
          none: {
            xs: {
              none: { padding: 'pl-4.25' },
              xs: { padding: 'pl-6.25' },
              sm: { padding: 'pl-8.25' },
              md: { padding: 'pl-10.25' },
              lg: { padding: 'pl-12.25' },
              xl: { padding: 'pl-16.25' },
              xxl: { padding: 'pl-20.25' }
            },
            sm: {
              none: { padding: 'pl-6' },
              xs: { padding: 'pl-8' },
              sm: { padding: 'pl-10' },
              md: { padding: 'pl-12' },
              lg: { padding: 'pl-14' },
              xl: { padding: 'pl-18' },
              xxl: { padding: 'pl-22' }
            },
            md: {
              none: { padding: 'pl-7.5' },
              xs: { padding: 'pl-9.5' },
              sm: { padding: 'pl-11.5' },
              md: { padding: 'pl-13.5' },
              lg: { padding: 'pl-15.5' },
              xl: { padding: 'pl-19.5' },
              xxl: { padding: 'pl-23.5' }
            },
            lg: {
              none: { padding: 'pl-9' },
              xs: { padding: 'pl-11' },
              sm: { padding: 'pl-13' },
              md: { padding: 'pl-15' },
              lg: { padding: 'pl-17' },
              xl: { padding: 'pl-21' },
              xxl: { padding: 'pl-25' }
            },
            xl: {
              none: { padding: 'pl-11.5' },
              xs: { padding: 'pl-13.5' },
              sm: { padding: 'pl-15.5' },
              md: { padding: 'pl-17.5' },
              lg: { padding: 'pl-19.5' },
              xl: { padding: 'pl-23.5' },
              xxl: { padding: 'pl-27.5' }
            }
          },
          xs: {
            xs: {
              none: { padding: 'pl-6.25' },
              xs: { padding: 'pl-8.25' },
              sm: { padding: 'pl-10.25' },
              md: { padding: 'pl-12.25' },
              lg: { padding: 'pl-14.25' },
              xl: { padding: 'pl-18.25' },
              xxl: { padding: 'pl-22.25' }
            },
            sm: {
              none: { padding: 'pl-8' },
              xs: { padding: 'pl-10' },
              sm: { padding: 'pl-12' },
              md: { padding: 'pl-14' },
              lg: { padding: 'pl-16' },
              xl: { padding: 'pl-20' },
              xxl: { padding: 'pl-24' }
            },
            md: {
              none: { padding: 'pl-9.5' },
              xs: { padding: 'pl-11.5' },
              sm: { padding: 'pl-13.5' },
              md: { padding: 'pl-15.5' },
              lg: { padding: 'pl-17.5' },
              xl: { padding: 'pl-21.5' },
              xxl: { padding: 'pl-25.5' }
            },
            lg: {
              none: { padding: 'pl-11' },
              xs: { padding: 'pl-13' },
              sm: { padding: 'pl-15' },
              md: { padding: 'pl-17' },
              lg: { padding: 'pl-19' },
              xl: { padding: 'pl-23' },
              xxl: { padding: 'pl-27' }
            },
            xl: {
              none: { padding: 'pl-13.5' },
              xs: { padding: 'pl-15.5' },
              sm: { padding: 'pl-17.5' },
              md: { padding: 'pl-19.5' },
              lg: { padding: 'pl-21.5' },
              xl: { padding: 'pl-25.5' },
              xxl: { padding: 'pl-29.5' }
            }
          },
          sm: {
            xs: {
              none: { padding: 'pl-8.25' },
              xs: { padding: 'pl-10.25' },
              sm: { padding: 'pl-12.25' },
              md: { padding: 'pl-14.25' },
              lg: { padding: 'pl-16.25' },
              xl: { padding: 'pl-20.25' },
              xxl: { padding: 'pl-24.25' }
            },
            sm: {
              none: { padding: 'pl-10' },
              xs: { padding: 'pl-12' },
              sm: { padding: 'pl-14' },
              md: { padding: 'pl-16' },
              lg: { padding: 'pl-18' },
              xl: { padding: 'pl-22' },
              xxl: { padding: 'pl-26' }
            },
            md: {
              none: { padding: 'pl-11.5' },
              xs: { padding: 'pl-13.5' },
              sm: { padding: 'pl-15.5' },
              md: { padding: 'pl-17.5' },
              lg: { padding: 'pl-19.5' },
              xl: { padding: 'pl-23.5' },
              xxl: { padding: 'pl-27.5' }
            },
            lg: {
              none: { padding: 'pl-13' },
              xs: { padding: 'pl-15' },
              sm: { padding: 'pl-17' },
              md: { padding: 'pl-19' },
              lg: { padding: 'pl-21' },
              xl: { padding: 'pl-25' },
              xxl: { padding: 'pl-29' }
            },
            xl: {
              none: { padding: 'pl-15.5' },
              xs: { padding: 'pl-17.5' },
              sm: { padding: 'pl-19.5' },
              md: { padding: 'pl-21.5' },
              lg: { padding: 'pl-23.5' },
              xl: { padding: 'pl-27.5' },
              xxl: { padding: 'pl-31.5' }
            }
          },
          md: {
            xs: {
              none: { padding: 'pl-10.25' },
              xs: { padding: 'pl-12.25' },
              sm: { padding: 'pl-14.25' },
              md: { padding: 'pl-16.25' },
              lg: { padding: 'pl-18.25' },
              xl: { padding: 'pl-22.25' },
              xxl: { padding: 'pl-26.25' }
            },
            sm: {
              none: { padding: 'pl-12' },
              xs: { padding: 'pl-14' },
              sm: { padding: 'pl-16' },
              md: { padding: 'pl-18' },
              lg: { padding: 'pl-20' },
              xl: { padding: 'pl-24' },
              xxl: { padding: 'pl-28' }
            },
            md: {
              none: { padding: 'pl-13.5' },
              xs: { padding: 'pl-15.5' },
              sm: { padding: 'pl-17.5' },
              md: { padding: 'pl-19.5' },
              lg: { padding: 'pl-21.5' },
              xl: { padding: 'pl-25.5' },
              xxl: { padding: 'pl-29.5' }
            },
            lg: {
              none: { padding: 'pl-15' },
              xs: { padding: 'pl-17' },
              sm: { padding: 'pl-19' },
              md: { padding: 'pl-21' },
              lg: { padding: 'pl-23' },
              xl: { padding: 'pl-27' },
              xxl: { padding: 'pl-31' }
            },
            xl: {
              none: { padding: 'pl-17.5' },
              xs: { padding: 'pl-19.5' },
              sm: { padding: 'pl-21.5' },
              md: { padding: 'pl-23.5' },
              lg: { padding: 'pl-25.5' },
              xl: { padding: 'pl-29.5' },
              xxl: { padding: 'pl-33.5' }
            }
          },
          lg: {
            xs: {
              none: { padding: 'pl-12.25' },
              xs: { padding: 'pl-14.25' },
              sm: { padding: 'pl-16.25' },
              md: { padding: 'pl-18.25' },
              lg: { padding: 'pl-20.25' },
              xl: { padding: 'pl-24.25' },
              xxl: { padding: 'pl-28.25' }
            },
            sm: {
              none: { padding: 'pl-14' },
              xs: { padding: 'pl-16' },
              sm: { padding: 'pl-18' },
              md: { padding: 'pl-20' },
              lg: { padding: 'pl-22' },
              xl: { padding: 'pl-26' },
              xxl: { padding: 'pl-30' }
            },
            md: {
              none: { padding: 'pl-15.5' },
              xs: { padding: 'pl-17.5' },
              sm: { padding: 'pl-19.5' },
              md: { padding: 'pl-21.5' },
              lg: { padding: 'pl-23.5' },
              xl: { padding: 'pl-27.5' },
              xxl: { padding: 'pl-31.5' }
            },
            lg: {
              none: { padding: 'pl-17' },
              xs: { padding: 'pl-19' },
              sm: { padding: 'pl-21' },
              md: { padding: 'pl-23' },
              lg: { padding: 'pl-25' },
              xl: { padding: 'pl-29' },
              xxl: { padding: 'pl-33' }
            },
            xl: {
              none: { padding: 'pl-19.5' },
              xs: { padding: 'pl-21.5' },
              sm: { padding: 'pl-23.5' },
              md: { padding: 'pl-25.5' },
              lg: { padding: 'pl-27.5' },
              xl: { padding: 'pl-31.5' },
              xxl: { padding: 'pl-35.5' }
            }
          },
          xl: {
            xs: {
              none: { padding: 'pl-16.25' },
              xs: { padding: 'pl-18.25' },
              sm: { padding: 'pl-20.25' },
              md: { padding: 'pl-22.25' },
              lg: { padding: 'pl-24.25' },
              xl: { padding: 'pl-28.25' },
              xxl: { padding: 'pl-32.25' }
            },
            sm: {
              none: { padding: 'pl-18' },
              xs: { padding: 'pl-20' },
              sm: { padding: 'pl-22' },
              md: { padding: 'pl-24' },
              lg: { padding: 'pl-26' },
              xl: { padding: 'pl-30' },
              xxl: { padding: 'pl-34' }
            },
            md: {
              none: { padding: 'pl-19.5' },
              xs: { padding: 'pl-21.5' },
              sm: { padding: 'pl-23.5' },
              md: { padding: 'pl-25.5' },
              lg: { padding: 'pl-27.5' },
              xl: { padding: 'pl-31.5' },
              xxl: { padding: 'pl-35.5' }
            },
            lg: {
              none: { padding: 'pl-21' },
              xs: { padding: 'pl-23' },
              sm: { padding: 'pl-25' },
              md: { padding: 'pl-27' },
              lg: { padding: 'pl-29' },
              xl: { padding: 'pl-33' },
              xxl: { padding: 'pl-37' }
            },
            xl: {
              none: { padding: 'pl-23.5' },
              xs: { padding: 'pl-25.5' },
              sm: { padding: 'pl-27.5' },
              md: { padding: 'pl-29.5' },
              lg: { padding: 'pl-31.5' },
              xl: { padding: 'pl-35.5' },
              xxl: { padding: 'pl-39.5' }
            }
          }
        },
        right: {
          none: {
            xs: {
              none: { padding: 'pr-4.25' },
              xs: { padding: 'pr-6.25' },
              sm: { padding: 'pr-8.25' },
              md: { padding: 'pr-10.25' },
              lg: { padding: 'pr-12.25' },
              xl: { padding: 'pr-16.25' },
              xxl: { padding: 'pr-20.25' }
            },
            sm: {
              none: { padding: 'pr-6' },
              xs: { padding: 'pr-8' },
              sm: { padding: 'pr-10' },
              md: { padding: 'pr-12' },
              lg: { padding: 'pr-14' },
              xl: { padding: 'pr-18' },
              xxl: { padding: 'pr-22' }
            },
            md: {
              none: { padding: 'pr-7.5' },
              xs: { padding: 'pr-9.5' },
              sm: { padding: 'pr-11.5' },
              md: { padding: 'pr-13.5' },
              lg: { padding: 'pr-15.5' },
              xl: { padding: 'pr-19.5' },
              xxl: { padding: 'pr-23.5' }
            },
            lg: {
              none: { padding: 'pr-9' },
              xs: { padding: 'pr-11' },
              sm: { padding: 'pr-13' },
              md: { padding: 'pr-15' },
              lg: { padding: 'pr-17' },
              xl: { padding: 'pr-21' },
              xxl: { padding: 'pr-25' }
            },
            xl: {
              none: { padding: 'pr-11.5' },
              xs: { padding: 'pr-13.5' },
              sm: { padding: 'pr-15.5' },
              md: { padding: 'pr-17.5' },
              lg: { padding: 'pr-19.5' },
              xl: { padding: 'pr-23.5' },
              xxl: { padding: 'pr-27.5' }
            }
          },
          xs: {
            xs: {
              none: { padding: 'pr-6.25' },
              xs: { padding: 'pr-8.25' },
              sm: { padding: 'pr-10.25' },
              md: { padding: 'pr-12.25' },
              lg: { padding: 'pr-14.25' },
              xl: { padding: 'pr-18.25' },
              xxl: { padding: 'pr-22.25' }
            },
            sm: {
              none: { padding: 'pr-8' },
              xs: { padding: 'pr-10' },
              sm: { padding: 'pr-12' },
              md: { padding: 'pr-14' },
              lg: { padding: 'pr-16' },
              xl: { padding: 'pr-20' },
              xxl: { padding: 'pr-24' }
            },
            md: {
              none: { padding: 'pr-9.5' },
              xs: { padding: 'pr-11.5' },
              sm: { padding: 'pr-13.5' },
              md: { padding: 'pr-15.5' },
              lg: { padding: 'pr-17.5' },
              xl: { padding: 'pr-21.5' },
              xxl: { padding: 'pr-25.5' }
            },
            lg: {
              none: { padding: 'pr-11' },
              xs: { padding: 'pr-13' },
              sm: { padding: 'pr-15' },
              md: { padding: 'pr-17' },
              lg: { padding: 'pr-19' },
              xl: { padding: 'pr-23' },
              xxl: { padding: 'pr-27' }
            },
            xl: {
              none: { padding: 'pr-13.5' },
              xs: { padding: 'pr-15.5' },
              sm: { padding: 'pr-17.5' },
              md: { padding: 'pr-19.5' },
              lg: { padding: 'pr-21.5' },
              xl: { padding: 'pr-25.5' },
              xxl: { padding: 'pr-29.5' }
            }
          },
          sm: {
            xs: {
              none: { padding: 'pr-8.25' },
              xs: { padding: 'pr-10.25' },
              sm: { padding: 'pr-12.25' },
              md: { padding: 'pr-14.25' },
              lg: { padding: 'pr-16.25' },
              xl: { padding: 'pr-20.25' },
              xxl: { padding: 'pr-24.25' }
            },
            sm: {
              none: { padding: 'pr-10' },
              xs: { padding: 'pr-12' },
              sm: { padding: 'pr-14' },
              md: { padding: 'pr-16' },
              lg: { padding: 'pr-18' },
              xl: { padding: 'pr-22' },
              xxl: { padding: 'pr-26' }
            },
            md: {
              none: { padding: 'pr-11.5' },
              xs: { padding: 'pr-13.5' },
              sm: { padding: 'pr-15.5' },
              md: { padding: 'pr-17.5' },
              lg: { padding: 'pr-19.5' },
              xl: { padding: 'pr-23.5' },
              xxl: { padding: 'pr-27.5' }
            },
            lg: {
              none: { padding: 'pr-13' },
              xs: { padding: 'pr-15' },
              sm: { padding: 'pr-17' },
              md: { padding: 'pr-19' },
              lg: { padding: 'pr-21' },
              xl: { padding: 'pr-25' },
              xxl: { padding: 'pr-29' }
            },
            xl: {
              none: { padding: 'pr-15.5' },
              xs: { padding: 'pr-17.5' },
              sm: { padding: 'pr-19.5' },
              md: { padding: 'pr-21.5' },
              lg: { padding: 'pr-23.5' },
              xl: { padding: 'pr-27.5' },
              xxl: { padding: 'pr-31.5' }
            }
          },
          md: {
            xs: {
              none: { padding: 'pr-10.25' },
              xs: { padding: 'pr-12.25' },
              sm: { padding: 'pr-14.25' },
              md: { padding: 'pr-16.25' },
              lg: { padding: 'pr-18.25' },
              xl: { padding: 'pr-22.25' },
              xxl: { padding: 'pr-26.25' }
            },
            sm: {
              none: { padding: 'pr-12' },
              xs: { padding: 'pr-14' },
              sm: { padding: 'pr-16' },
              md: { padding: 'pr-18' },
              lg: { padding: 'pr-20' },
              xl: { padding: 'pr-24' },
              xxl: { padding: 'pr-28' }
            },
            md: {
              none: { padding: 'pr-13.5' },
              xs: { padding: 'pr-15.5' },
              sm: { padding: 'pr-17.5' },
              md: { padding: 'pr-19.5' },
              lg: { padding: 'pr-21.5' },
              xl: { padding: 'pr-25.5' },
              xxl: { padding: 'pr-29.5' }
            },
            lg: {
              none: { padding: 'pr-15' },
              xs: { padding: 'pr-17' },
              sm: { padding: 'pr-19' },
              md: { padding: 'pr-21' },
              lg: { padding: 'pr-23' },
              xl: { padding: 'pr-27' },
              xxl: { padding: 'pr-31' }
            },
            xl: {
              none: { padding: 'pr-17.5' },
              xs: { padding: 'pr-19.5' },
              sm: { padding: 'pr-21.5' },
              md: { padding: 'pr-23.5' },
              lg: { padding: 'pr-25.5' },
              xl: { padding: 'pr-29.5' },
              xxl: { padding: 'pr-33.5' }
            }
          },
          lg: {
            xs: {
              none: { padding: 'pr-12.25' },
              xs: { padding: 'pr-14.25' },
              sm: { padding: 'pr-16.25' },
              md: { padding: 'pr-18.25' },
              lg: { padding: 'pr-20.25' },
              xl: { padding: 'pr-24.25' },
              xxl: { padding: 'pr-28.25' }
            },
            sm: {
              none: { padding: 'pr-14' },
              xs: { padding: 'pr-16' },
              sm: { padding: 'pr-18' },
              md: { padding: 'pr-20' },
              lg: { padding: 'pr-22' },
              xl: { padding: 'pr-26' },
              xxl: { padding: 'pr-30' }
            },
            md: {
              none: { padding: 'pr-15.5' },
              xs: { padding: 'pr-17.5' },
              sm: { padding: 'pr-19.5' },
              md: { padding: 'pr-21.5' },
              lg: { padding: 'pr-23.5' },
              xl: { padding: 'pr-27.5' },
              xxl: { padding: 'pr-31.5' }
            },
            lg: {
              none: { padding: 'pr-17' },
              xs: { padding: 'pr-19' },
              sm: { padding: 'pr-21' },
              md: { padding: 'pr-23' },
              lg: { padding: 'pr-25' },
              xl: { padding: 'pr-29' },
              xxl: { padding: 'pr-33' }
            },
            xl: {
              none: { padding: 'pr-19.5' },
              xs: { padding: 'pr-21.5' },
              sm: { padding: 'pr-23.5' },
              md: { padding: 'pr-25.5' },
              lg: { padding: 'pr-27.5' },
              xl: { padding: 'pr-31.5' },
              xxl: { padding: 'pr-35.5' }
            }
          },
          xl: {
            xs: {
              none: { padding: 'pr-16.25' },
              xs: { padding: 'pr-18.25' },
              sm: { padding: 'pr-20.25' },
              md: { padding: 'pr-22.25' },
              lg: { padding: 'pr-24.25' },
              xl: { padding: 'pr-28.25' },
              xxl: { padding: 'pr-32.25' }
            },
            sm: {
              none: { padding: 'pr-18' },
              xs: { padding: 'pr-20' },
              sm: { padding: 'pr-22' },
              md: { padding: 'pr-24' },
              lg: { padding: 'pr-26' },
              xl: { padding: 'pr-30' },
              xxl: { padding: 'pr-34' }
            },
            md: {
              none: { padding: 'pr-19.5' },
              xs: { padding: 'pr-21.5' },
              sm: { padding: 'pr-23.5' },
              md: { padding: 'pr-25.5' },
              lg: { padding: 'pr-27.5' },
              xl: { padding: 'pr-31.5' },
              xxl: { padding: 'pr-35.5' }
            },
            lg: {
              none: { padding: 'pr-21' },
              xs: { padding: 'pr-23' },
              sm: { padding: 'pr-25' },
              md: { padding: 'pr-27' },
              lg: { padding: 'pr-29' },
              xl: { padding: 'pr-33' },
              xxl: { padding: 'pr-37' }
            },
            xl: {
              none: { padding: 'pr-23.5' },
              xs: { padding: 'pr-25.5' },
              sm: { padding: 'pr-27.5' },
              md: { padding: 'pr-29.5' },
              lg: { padding: 'pr-31.5' },
              xl: { padding: 'pr-35.5' },
              xxl: { padding: 'pr-39.5' }
            }
          }
        }
      }
    },
    gutter: {
      none: {},
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
    ring: {
      boxShadow: 'ring'
    },
    weight: {
      none: {},
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
    color: {
      overlay: {
        backgroundColor: 'bg-black/70'
      },
      bg: {
        light: {
          inherit: {},
          disabled: {
            backgroundColor: 'bg-light-on-disabled'
          },
          'on-disabled': {
            backgroundColor: 'bg-light-disabled'
          },
          shell: {
            backgroundColor: 'bg-light-shell'
          },
          surface: {
            backgroundColor: 'bg-light-on-surface'
          },
          neutral: {
            backgroundColor: 'bg-light-neutral'
          },
          primary: {
            backgroundColor: 'bg-light-primary'
          },
          secondary: {
            backgroundColor: 'bg-light-secondary'
          },
          tertiary: {
            backgroundColor: 'bg-light-tertiary'
          },
          success: {
            backgroundColor: 'bg-light-success'
          },
          warning: {
            backgroundColor: 'bg-light-warning'
          },
          error: {
            backgroundColor: 'bg-light-error'
          },
          'soft-neutral': {
            backgroundColor: 'bg-light-soft-neutral'
          },
          'soft-primary': {
            backgroundColor: 'bg-light-soft-primary'
          },
          'soft-secondary': {
            backgroundColor: 'bg-light-soft-secondary'
          },
          'soft-tertiary': {
            backgroundColor: 'bg-light-soft-tertiary'
          },
          'soft-success': {
            backgroundColor: 'bg-light-soft-success'
          },
          'soft-warning': {
            backgroundColor: 'bg-light-soft-warning'
          },
          'soft-error': {
            backgroundColor: 'bg-light-soft-error'
          },
          'on-neutral': {
            backgroundColor: 'bg-light-on-neutral'
          },
          'on-primary': {
            backgroundColor: 'bg-light-on-primary'
          },
          'on-secondary': {
            backgroundColor: 'bg-light-on-secondary'
          },
          'on-tertiary': {
            backgroundColor: 'bg-light-on-tertiary'
          },
          'on-success': {
            backgroundColor: 'bg-light-on-success'
          },
          'on-warning': {
            backgroundColor: 'bg-light-on-warning'
          },
          'on-error': {
            backgroundColor: 'bg-light-on-error'
          }
        },
        dark: {
          inherit: {},
          disabled: {
            backgroundColor: 'bg-dark-on-disabled'
          },
          'on-disabled': {
            backgroundColor: 'bg-dark-disabled'
          },
          shell: {
            backgroundColor: 'bg-dark-shell'
          },
          surface: {
            backgroundColor: 'bg-dark-surface'
          },
          neutral: {
            backgroundColor: 'bg-dark-neutral'
          },
          primary: {
            backgroundColor: 'bg-dark-primary'
          },
          secondary: {
            backgroundColor: 'bg-dark-secondary'
          },
          tertiary: {
            backgroundColor: 'bg-dark-tertiary'
          },
          success: {
            backgroundColor: 'bg-dark-success'
          },
          warning: {
            backgroundColor: 'bg-dark-warning'
          },
          error: {
            backgroundColor: 'bg-dark-error'
          },
          'soft-neutral': {
            backgroundColor: 'bg-dark-soft-neutral'
          },
          'soft-primary': {
            backgroundColor: 'bg-dark-soft-primary'
          },
          'soft-secondary': {
            backgroundColor: 'bg-dark-soft-secondary'
          },
          'soft-tertiary': {
            backgroundColor: 'bg-dark-soft-tertiary'
          },
          'soft-success': {
            backgroundColor: 'bg-dark-soft-success'
          },
          'soft-warning': {
            backgroundColor: 'bg-dark-soft-warning'
          },
          'soft-error': {
            backgroundColor: 'bg-dark-soft-error'
          },
          'on-neutral': {
            backgroundColor: 'bg-dark-on-neutral'
          },
          'on-primary': {
            backgroundColor: 'bg-dark-on-primary'
          },
          'on-secondary': {
            backgroundColor: 'bg-dark-on-secondary'
          },
          'on-tertiary': {
            backgroundColor: 'bg-dark-on-tertiary'
          },
          'on-success': {
            backgroundColor: 'bg-dark-on-success'
          },
          'on-warning': {
            backgroundColor: 'bg-dark-on-warning'
          },
          'on-error': {
            backgroundColor: 'bg-dark-on-error'
          }
        }
      },
      border: {
        none: {},
        transparent: {
          borderColor: 'border-transparent'
        },
        default: {
          light: {
            inherit: {},
            disabled: {
              borderColor: 'border-light-disabled'
            },
            'on-disabled': {
              borderColor: 'border-light-on-disabled'
            },
            surface: {
              borderColor: 'border-light-surface'
            },
            neutral: {
              borderColor: 'border-light-neutral'
            },
            primary: {
              borderColor: 'border-light-primary'
            },
            secondary: {
              borderColor: 'border-light-secondary'
            },
            tertiary: {
              borderColor: 'border-light-tertiary'
            },
            success: {
              borderColor: 'border-light-success'
            },
            warning: {
              borderColor: 'border-light-warning'
            },
            error: {
              borderColor: 'border-light-error'
            },
            'soft-neutral': {
              borderColor: 'border-light-soft-neutral'
            },
            'soft-primary': {
              borderColor: 'border-light-soft-primary'
            },
            'soft-secondary': {
              borderColor: 'border-light-soft-secondary'
            },
            'soft-tertiary': {
              borderColor: 'border-light-soft-tertiary'
            },
            'soft-success': {
              borderColor: 'border-light-soft-success'
            },
            'soft-warning': {
              borderColor: 'border-light-soft-warning'
            },
            'soft-error': {
              borderColor: 'border-light-soft-error'
            },
            'on-neutral': {
              borderColor: 'border-light-on-neutral'
            },
            'on-primary': {
              borderColor: 'border-light-on-primary'
            },
            'on-secondary': {
              borderColor: 'border-light-on-secondary'
            },
            'on-tertiary': {
              borderColor: 'border-light-on-tertiary'
            },
            'on-success': {
              borderColor: 'border-light-on-success'
            },
            'on-warning': {
              borderColor: 'border-light-on-warning'
            },
            'on-error': {
              borderColor: 'border-light-on-error'
            }
          },
          dark: {
            inherit: {},
            disabled: {
              borderColor: 'border-dark-disabled'
            },
            'on-disabled': {
              borderColor: 'border-dark-on-disabled'
            },
            surface: {
              borderColor: 'border-dark-surface'
            },
            neutral: {
              borderColor: 'border-dark-neutral'
            },
            primary: {
              borderColor: 'border-dark-primary'
            },
            secondary: {
              borderColor: 'border-dark-secondary'
            },
            tertiary: {
              borderColor: 'border-dark-tertiary'
            },
            success: {
              borderColor: 'border-dark-success'
            },
            warning: {
              borderColor: 'border-dark-warning'
            },
            error: {
              borderColor: 'border-dark-error'
            },
            'soft-neutral': {
              borderColor: 'border-dark-soft-neutral'
            },
            'soft-primary': {
              borderColor: 'border-dark-soft-primary'
            },
            'soft-secondary': {
              borderColor: 'border-dark-soft-secondary'
            },
            'soft-tertiary': {
              borderColor: 'border-dark-soft-tertiary'
            },
            'soft-success': {
              borderColor: 'border-dark-soft-success'
            },
            'soft-warning': {
              borderColor: 'border-dark-soft-warning'
            },
            'soft-error': {
              borderColor: 'border-dark-soft-error'
            },
            'on-neutral': {
              borderColor: 'border-dark-on-neutral'
            },
            'on-primary': {
              borderColor: 'border-dark-on-primary'
            },
            'on-secondary': {
              borderColor: 'border-dark-on-secondary'
            },
            'on-tertiary': {
              borderColor: 'border-dark-on-tertiary'
            },
            'on-success': {
              borderColor: 'border-dark-on-success'
            },
            'on-warning': {
              borderColor: 'border-dark-on-warning'
            },
            'on-error': {
              borderColor: 'border-dark-on-error'
            }
          }
        }
      },
      text: {
        light: {
          inherit: {},
          disabled: {
            color: 'text-light-disabled'
          },
          'on-disabled': {
            color: 'text-light-on-disabled'
          },
          surface: {
            color: 'text-light-surface'
          },
          neutral: {
            color: 'text-light-neutral'
          },
          primary: {
            color: 'text-light-primary'
          },
          secondary: {
            color: 'text-light-secondary'
          },
          tertiary: {
            color: 'text-light-tertiary'
          },
          success: {
            color: 'text-light-success'
          },
          warning: {
            color: 'text-light-warning'
          },
          error: {
            color: 'text-light-error'
          },
          'soft-neutral': {
            color: 'text-light-soft-neutral'
          },
          'soft-primary': {
            color: 'text-light-soft-primary'
          },
          'soft-secondary': {
            color: 'text-light-soft-secondary'
          },
          'soft-tertiary': {
            color: 'text-light-soft-tertiary'
          },
          'soft-success': {
            color: 'text-light-soft-success'
          },
          'soft-warning': {
            color: 'text-light-soft-warning'
          },
          'soft-error': {
            color: 'text-light-soft-error'
          },
          'on-neutral': {
            color: 'text-light-on-neutral'
          },
          'on-primary': {
            color: 'text-light-on-primary'
          },
          'on-secondary': {
            color: 'text-light-on-secondary'
          },
          'on-tertiary': {
            color: 'text-light-on-tertiary'
          },
          'on-success': {
            color: 'text-light-on-success'
          },
          'on-warning': {
            color: 'text-light-on-warning'
          },
          'on-error': {
            color: 'text-light-on-error'
          }
        },
        dark: {
          inherit: {},
          disabled: {
            color: 'text-dark-disabled'
          },
          'on-disabled': {
            color: 'text-light-ondisabled'
          },
          surface: {
            color: 'text-dark-surface'
          },
          neutral: {
            color: 'text-dark-neutral'
          },
          primary: {
            color: 'text-dark-primary'
          },
          secondary: {
            color: 'text-dark-secondary'
          },
          tertiary: {
            color: 'text-dark-tertiary'
          },
          success: {
            color: 'text-dark-success'
          },
          warning: {
            color: 'text-dark-warning'
          },
          error: {
            color: 'text-dark-error'
          },
          'soft-neutral': {
            color: 'text-dark-soft-neutral'
          },
          'soft-primary': {
            color: 'text-dark-soft-primary'
          },
          'soft-secondary': {
            color: 'text-dark-soft-secondary'
          },
          'soft-tertiary': {
            color: 'text-dark-soft-tertiary'
          },
          'soft-success': {
            color: 'text-dark-soft-success'
          },
          'soft-warning': {
            color: 'text-dark-soft-warning'
          },
          'soft-error': {
            color: 'text-dark-soft-error'
          },
          'on-neutral': {
            color: 'text-dark-on-neutral'
          },
          'on-primary': {
            color: 'text-dark-on-primary'
          },
          'on-secondary': {
            color: 'text-dark-on-secondary'
          },
          'on-tertiary': {
            color: 'text-dark-on-tertiary'
          },
          'on-success': {
            color: 'text-dark-on-success'
          },
          'on-warning': {
            color: 'text-dark-on-warning'
          },
          'on-error': {
            color: 'text-dark-on-error'
          }
        }
      },
      fill: {
        light: {
          inherit: {},
          disabled: {
            fill: 'fill-light-disabled'
          },
          'on-disabled': {
            fill: 'fill-light-on-disabled'
          },
          surface: {
            fill: 'fill-light-surface'
          },
          neutral: {
            fill: 'fill-light-neutral'
          },
          primary: {
            fill: 'fill-light-primary'
          },
          secondary: {
            fill: 'fill-light-secondary'
          },
          tertiary: {
            fill: 'fill-light-tertiary'
          },
          success: {
            fill: 'fill-light-success'
          },
          warning: {
            fill: 'fill-light-warning'
          },
          error: {
            fill: 'fill-light-error'
          },
          'soft-neutral': {
            fill: 'fill-light-soft-neutral'
          },
          'soft-primary': {
            fill: 'fill-light-soft-primary'
          },
          'soft-secondary': {
            fill: 'fill-light-soft-secondary'
          },
          'soft-tertiary': {
            fill: 'fill-light-soft-tertiary'
          },
          'soft-success': {
            fill: 'fill-light-soft-success'
          },
          'soft-warning': {
            fill: 'fill-light-soft-warning'
          },
          'soft-error': {
            fill: 'fill-light-soft-error'
          },
          'on-neutral': {
            fill: 'fill-light-on-neutral'
          },
          'on-primary': {
            fill: 'fill-light-on-primary'
          },
          'on-secondary': {
            fill: 'fill-light-on-secondary'
          },
          'on-tertiary': {
            fill: 'fill-light-on-tertiary'
          },
          'on-success': {
            fill: 'fill-light-on-success'
          },
          'on-warning': {
            fill: 'fill-light-on-warning'
          },
          'on-error': {
            fill: 'fill-light-on-error'
          }
        },
        dark: {
          inherit: {},
          disabled: {
            fill: 'fill-dark-disabled'
          },
          'on-disabled': {
            fill: 'fill-dark-on-disabled'
          },
          surface: {
            fill: 'fill-dark-surface'
          },
          neutral: {
            fill: 'fill-dark-neutral'
          },
          primary: {
            fill: 'fill-dark-primary'
          },
          secondary: {
            fill: 'fill-dark-secondary'
          },
          tertiary: {
            fill: 'fill-dark-tertiary'
          },
          success: {
            fill: 'fill-dark-success'
          },
          warning: {
            fill: 'fill-dark-warning'
          },
          error: {
            fill: 'fill-dark-error'
          },
          'soft-neutral': {
            fill: 'fill-dark-soft-neutral'
          },
          'soft-primary': {
            fill: 'fill-dark-soft-primary'
          },
          'soft-secondary': {
            fill: 'fill-dark-soft-secondary'
          },
          'soft-tertiary': {
            fill: 'fill-dark-soft-tertiary'
          },
          'soft-success': {
            fill: 'fill-dark-soft-success'
          },
          'soft-warning': {
            fill: 'fill-dark-soft-warning'
          },
          'soft-error': {
            fill: 'fill-dark-soft-error'
          },
          'on-neutral': {
            fill: 'fill-dark-on-neutral'
          },
          'on-primary': {
            fill: 'fill-dark-on-primary'
          },
          'on-secondary': {
            fill: 'fill-dark-on-secondary'
          },
          'on-tertiary': {
            fill: 'fill-dark-on-tertiary'
          },
          'on-success': {
            fill: 'fill-dark-on-success'
          },
          'on-warning': {
            fill: 'fill-dark-on-warning'
          },
          'on-error': {
            fill: 'fill-dark-on-error'
          }
        }
      },
      ring: {
        light: {
          inherit: {},
          disabled: {
            boxShadow: 'ring-light-disabled'
          },
          surface: {
            boxShadow: 'ring-light-surface'
          },
          neutral: {
            boxShadow: 'ring-light-neutral'
          },
          primary: {
            boxShadow: 'ring-light-primary'
          },
          secondary: {
            boxShadow: 'ring-light-secondary'
          },
          tertiary: {
            boxShadow: 'ring-light-tertiary'
          },
          success: {
            boxShadow: 'ring-light-success'
          },
          warning: {
            boxShadow: 'ring-light-warning'
          },
          error: {
            boxShadow: 'ring-light-error'
          },
          'on-neutral': {
            boxShadow: 'ring-light-on-neutral'
          },
          'on-primary': {
            boxShadow: 'ring-light-on-primary'
          },
          'on-secondary': {
            boxShadow: 'ring-light-on-secondary'
          },
          'on-tertiary': {
            boxShadow: 'ring-light-on-tertiary'
          },
          'on-success': {
            boxShadow: 'ring-light-on-success'
          },
          'on-warning': {
            boxShadow: 'ring-light-on-warning'
          },
          'on-error': {
            boxShadow: 'ring-light-on-error'
          }
        },
        dark: {
          inherit: {},
          disabled: {
            boxShadow: 'ring-dark-disabled'
          },
          surface: {
            boxShadow: 'ring-dark-surface'
          },
          neutral: {
            boxShadow: 'ring-dark-neutral'
          },
          primary: {
            boxShadow: 'ring-dark-primary'
          },
          secondary: {
            boxShadow: 'ring-dark-secondary'
          },
          tertiary: {
            boxShadow: 'ring-dark-tertiary'
          },
          success: {
            boxShadow: 'ring-dark-success'
          },
          warning: {
            boxShadow: 'ring-dark-warning'
          },
          error: {
            boxShadow: 'ring-dark-error'
          },
          'on-neutral': {
            boxShadow: 'ring-dark-on-neutral'
          },
          'on-primary': {
            boxShadow: 'ring-dark-on-primary'
          },
          'on-secondary': {
            boxShadow: 'ring-dark-on-secondary'
          },
          'on-tertiary': {
            boxShadow: 'ring-dark-on-tertiary'
          },
          'on-success': {
            boxShadow: 'ring-dark-on-success'
          },
          'on-warning': {
            boxShadow: 'ring-dark-on-warning'
          },
          'on-error': {
            boxShadow: 'ring-dark-on-error'
          }
        }
      },
      focus: {
        parent: {
          light: {
            inherit: {},
            neutral: {
              group:
                '[&.focused]:text-light-neutral [&.focused]:fill-light-neutral'
            },
            primary: {
              group:
                '[&.focused]:text-light-primary [&.focused]:fill-light-primary'
            },
            secondary: {
              group:
                '[&.focused]:text-light-secondary [&.focused]:fill-light-secondary'
            },
            tertiary: {
              group:
                '[&.focused]:text-light-tertiary [&.focused]:fill-light-tertiary'
            },
            success: {
              group:
                '[&.focused]:text-light-success [&.focused]:fill-light-success'
            },
            warning: {
              group:
                '[&.focused]:text-light-warning [&.focused]:fill-light-warning'
            },
            error: {
              group: '[&.focused]:text-light-error [&.focused]:fill-light-error'
            },
            'on-neutral': {
              group:
                '[&.focused]:text-light-on-neutral [&.focused]:fill-light-on-neutral'
            },
            'on-primary': {
              group:
                '[&.focused]:text-light-on-primary [&.focused]:fill-light-on-primary'
            },
            'on-secondary': {
              group:
                '[&.focused]:text-light-on-secondary [&.focused]:fill-light-on-secondary'
            },
            'on-tertiary': {
              group:
                '[&.focused]:text-light-on-tertiary [&.focused]:fill-light-on-tertiary'
            },
            'on-success': {
              group:
                '[&.focused]:text-light-on-success [&.focused]:fill-light-on-success'
            },
            'on-warning': {
              group:
                '[&.focused]:text-light-on-warning [&.focused]:fill-light-on-warning'
            },
            'on-error': {
              group:
                '[&.focused]:text-light-on-error [&.focused]:fill-light-on-error'
            }
          },
          dark: {
            inherit: {},
            neutral: {
              group:
                '[&.focused]:text-dark-neutral [&.focused]:fill-dark-neutral'
            },
            primary: {
              group:
                '[&.focused]:text-dark-primary [&.focused]:fill-dark-primary'
            },
            secondary: {
              group:
                '[&.focused]:text-dark-secondary [&.focused]:fill-dark-secondary'
            },
            tertiary: {
              group:
                '[&.focused]:text-dark-tertiary [&.focused]:fill-dark-tertiary'
            },
            success: {
              group:
                '[&.focused]:text-dark-success [&.focused]:fill-dark-success'
            },
            warning: {
              group:
                '[&.focused]:text-dark-warning [&.focused]:fill-dark-warning'
            },
            error: {
              group: '[&.focused]:text-dark-error [&.focused]:fill-dark-error'
            },
            'on-neutral': {
              group:
                '[&.focused]:text-dark-on-neutral [&.focused]:fill-dark-on-neutral'
            },
            'on-primary': {
              group:
                '[&.focused]:text-dark-on-primary [&.focused]:fill-dark-on-primary'
            },
            'on-secondary': {
              group:
                '[&.focused]:text-dark-on-secondary [&.focused]:fill-dark-on-secondary'
            },
            'on-tertiary': {
              group:
                '[&.focused]:text-dark-on-tertiary [&.focused]:fill-dark-on-tertiary'
            },
            'on-success': {
              group:
                '[&.focused]:text-dark-on-success [&.focused]:fill-dark-on-success'
            },
            'on-warning': {
              group:
                '[&.focused]:text-dark-on-warning [&.focused]:fill-dark-on-warning'
            },
            'on-error': {
              group:
                '[&.focused]:text-dark-on-error [&.focused]:fill-dark-on-error'
            }
          }
        },
        child: {
          light: {
            inherit: {},
            neutral: {
              group:
                'group-[.focused]:fill-light-neutral group-[.focused]:text-light-neutral'
            },
            primary: {
              group:
                'group-[.focused]:fill-light-primary group-[.focused]:text-light-primary'
            },
            secondary: {
              group:
                'group-[.focused]:fill-light-secondary group-[.focused]:text-light-secondary'
            },
            tertiary: {
              group:
                'group-[.focused]:fill-light-tertiary group-[.focused]:text-light-tertiary'
            },
            success: {
              group:
                'group-[.focused]:fill-light-success group-[.focused]:text-light-success'
            },
            warning: {
              group:
                'group-[.focused]:fill-light-warning group-[.focused]:text-light-warning'
            },
            error: {
              group:
                'group-[.focused]:fill-light-error group-[.focused]:text-light-error'
            },
            'on-neutral': {
              group:
                'group-[.focused]:fill-light-on-neutral group-[.focused]:text-light-on-neutral'
            },
            'on-primary': {
              group:
                'group-[.focused]:fill-light-on-primary group-[.focused]:text-light-on-primary'
            },
            'on-secondary': {
              group:
                'group-[.focused]:fill-light-on-secondary group-[.focused]:text-light-on-secondary'
            },
            'on-tertiary': {
              group:
                'group-[.focused]:fill-light-on-tertiary group-[.focused]:text-light-on-tertiary'
            },
            'on-success': {
              group:
                'group-[.focused]:fill-light-on-success group-[.focused]:text-light-on-success'
            },
            'on-warning': {
              group:
                'group-[.focused]:fill-light-on-warning group-[.focused]:text-light-on-warning'
            },
            'on-error': {
              group:
                'group-[.focused]:fill-light-on-error group-[.focused]:text-light-on-error'
            }
          },
          dark: {
            inherit: {},
            neutral: {
              group:
                'group-[.focused]:fill-dark-neutral group-[.focused]:text-dark-neutral'
            },
            primary: {
              group:
                'group-[.focused]:fill-dark-primary group-[.focused]:text-dark-primary'
            },
            secondary: {
              group:
                'group-[.focused]:fill-dark-secondary group-[.focused]:text-dark-secondary'
            },
            tertiary: {
              group:
                'group-[.focused]:fill-dark-tertiary group-[.focused]:text-dark-tertiary'
            },
            success: {
              group:
                'group-[.focused]:fill-dark-success group-[.focused]:text-dark-success'
            },
            warning: {
              group:
                'group-[.focused]:fill-dark-warning group-[.focused]:text-dark-warning'
            },
            error: {
              group:
                'group-[.focused]:fill-dark-error group-[.focused]:text-dark-error'
            },
            'on-neutral': {
              group:
                'group-[.focused]:fill-dark-on-neutral group-[.focused]:text-dark-on-neutral'
            },
            'on-primary': {
              group:
                'group-[.focused]:fill-dark-on-primary group-[.focused]:text-dark-on-primary'
            },
            'on-secondary': {
              group:
                'group-[.focused]:fill-dark-on-secondary group-[.focused]:text-dark-on-secondary'
            },
            'on-tertiary': {
              group:
                'group-[.focused]:fill-dark-on-tertiary group-[.focused]:text-dark-on-tertiary'
            },
            'on-success': {
              group:
                'group-[.focused]:fill-dark-on-success group-[.focused]:text-dark-on-success'
            },
            'on-warning': {
              group:
                'group-[.focused]:fill-dark-on-warning group-[.focused]:text-dark-on-warning'
            },
            'on-error': {
              group:
                'group-[.focused]:fill-dark-on-error group-[.focused]:text-dark-on-error'
            }
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
    },
    blur: {
      transform: 'backdrop-blur-sm'
    },
    focus: {
      none: {},
      default: {
        focus: 'focus:outline-none',
        focusVisible: 'focus-visible:ring-4'
      },
      disabled: {
        cursor: 'cursor-not-allowed',
        userSelect: 'select-none'
      }
    }
  }
};
