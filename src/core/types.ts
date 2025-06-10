import {
  type ElementType,
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
  type CSSProperties
} from 'react';

export type RefProps<
  E extends ElementType,
  D extends object,
  P extends object = object
> = Omit<ComponentPropsWithRef<E>, keyof D | keyof P | 'as'> &
  D &
  P & {
    as?: E;
  };

export type ComponentConfig<P, S = undefined> = {
  props: P;
  styles?: S;
};

export type MergedDefaultColor = 'surface' | DefaultColor;
export type MergedTextColor = 'disabled' | TextColor;
export type MergedBgColor =
  | 'disabled'
  | 'soft-neutral'
  | 'soft-primary'
  | 'soft-secondary'
  | 'soft-tertiary'
  | 'soft-success'
  | 'soft-warning'
  | 'soft-error'
  | TextColor;

export type Loading = boolean | 'left' | 'right';
export type Triger =
  | 'none'
  | 'hover'
  | 'click'
  | 'none-hover'
  | 'none-click'
  | 'hover-none'
  | 'hover-click'
  | 'click-none'
  | 'click-hover';
export type Layout =
  | 'default'
  | 'row'
  | 'col'
  | 'left'
  | 'center'
  | 'right'
  | 'dashboard'
  | 'dashboard-left'
  | 'dashboard-center'
  | 'dashboard-right';
export type ContainerLayout = 'header' | 'body' | 'footer' | 'fullbleed';
export type Variant =
  | 'none'
  | 'text'
  | 'plain'
  | 'soft'
  | 'default'
  | 'surface'
  | 'solid';
export type DefaultVariant =
  | 'text'
  | 'plain'
  | 'soft'
  | 'default'
  | 'surface'
  | 'solid';
export type InputVariant = 'default' | 'soft' | 'outlined';
export type Theme = 'light' | 'dark';
export type Orientation = 'horizontal' | 'vertical';
export type Display = 'block' | 'flex' | 'grid' | 'inline-flex';
export type Placement = 'top' | 'bottom' | 'left' | 'right';
export type CornerPlacement =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';
export type OuterPlacement =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end'
  | 'right-start'
  | 'right-end';
export type InnerPlacement =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';
export type CrossPlacement = 'left' | 'center' | 'right';
export type SidePlacement = 'left' | 'right';
export type MainAxis = 'top' | 'bottom' | 'left' | 'right';
export type CrossAxis = 'start' | 'center' | 'end';
export type Offset =
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xs-xs'
  | 'sm-sm'
  | 'md-md'
  | 'lg-lg'
  | 'xl-xl';
export type Overlap = 'square' | 'rounded' | 'circular';
export type Size =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xs-xs'
  | 'sm-sm'
  | 'md-md'
  | 'lg-lg'
  | 'xl-xl';
export type DefaultSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type InputSize = 'sm' | 'md' | 'lg';
export type TextareaSize = 'sm' | 'md' | 'lg' | 'full';
export type IconSize = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type HeadingSize = '1' | '2' | '3' | '4' | '5' | '6';
export type Length = number | string | 'auto';
export type Scale = 'default' | 'full' | 'fit';
export type DefaultScale = 'default' | 'text';
export type ButtonScale = 'default' | 'full' | 'fit' | 'square';
export type IconScale = 'default' | 'text' | 'square' | 'text-square';
export type Spacing =
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xs-xs'
  | 'sm-sm'
  | 'md-md'
  | 'lg-lg'
  | 'xl-xl'
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
  | 'xl-xl-bottom-right';
export type DefaultSpacing =
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xs-xs'
  | 'sm-sm'
  | 'md-md'
  | 'lg-lg'
  | 'xl-xl';
export type Margin =
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
  | 'xxl-bottom-right';
export type Border =
  | boolean
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
export type DefaultBorder =
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
export type Radius =
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
export type DefaultRadius = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type Weight = 'none' | 'semi' | 'bold';
export type Underline = 'none' | 'hover' | 'always';
export type TextWrap = 'wrap' | 'nowrap' | 'balance' | 'pretty';
export type TextAlign = 'left' | 'center' | 'right' | 'justify';
export type TextOverflow = 'clip' | 'truncate' | 'ellipsis';
export type WordBreak = 'normal' | 'words' | 'all' | 'keep';
export type Color =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'warning'
  | 'error'
  | 'on-neutral'
  | 'on-primary'
  | 'on-secondary'
  | 'on-tertiary'
  | 'on-success'
  | 'on-warning'
  | 'on-error';
export type DefaultColor =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'warning'
  | 'error';
export type TextColor =
  | 'inherit'
  | 'surface'
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'warning'
  | 'error'
  | 'on-neutral'
  | 'on-primary'
  | 'on-secondary'
  | 'on-tertiary'
  | 'on-success'
  | 'on-warning'
  | 'on-error';
export type TrailColor = 'none' | Color;
export type RingColor =
  | boolean
  | 'none'
  | 'surface'
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'warning'
  | 'error'
  | 'on-neutral'
  | 'on-primary'
  | 'on-secondary'
  | 'on-tertiary'
  | 'on-success'
  | 'on-warning'
  | 'on-error';
export type Direction = 'row' | 'col' | 'row-reverse' | 'col-reverse';
export type Flow = 'row' | 'col' | 'dense' | 'row-dense' | 'col-dense';
export type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type JustifyContent =
  | 'normal'
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly'
  | 'stretch';
export type AlignContent =
  | 'normal'
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly'
  | 'stretch'
  | 'baseline';
export type JustifyItems = 'stretch' | 'start' | 'center' | 'end';
export type AlignItems = 'stretch' | 'start' | 'center' | 'end' | 'baseline';
export type Gap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type Effect = 'none' | 'shadow';
export type AccordionEffect = 'none' | 'opacity';
export type RippleEffect = 'default';
export type Ripple = 'none' | 'default';

export type Props<T> = Omit<
  Omit<
    Omit<
      Omit<Omit<Omit<Omit<T, 'offset'>, 'size'>, 'scale'>, 'radius'>,
      'color'
    >,
    'rotate'
  >,
  'content'
>;

// Omit<T, 'offset' | 'size' | 'scale' | 'radius' | 'color' | 'rotate' | 'content'>

export type DefaultProps<T extends ElementType> = Props<
  ComponentPropsWithoutRef<T>
>;

export type Cursor = {
  x: number;
  y: number;
};

export type TransitionProps = {
  enterDuration?: number;
  exitDuration?: number;
  enterDelay?: number;
  exitDelay?: number;
  enteredStyle?: CSSProperties;
  exitedStyle?: CSSProperties;
  enteringStyle?: CSSProperties;
  exitingStyle?: CSSProperties;
};

type CSSPropKeys =
  | 'state'
  | 'active'
  | 'alignContent'
  | 'alignItems'
  | 'animation'
  | 'appearance'
  | 'backgroundColor'
  | 'borderColor'
  | 'borderRadius'
  | 'borderWidth'
  | 'bottom'
  | 'boxShadow'
  | 'checked'
  | 'color'
  | 'cursor'
  | 'disabled'
  | 'display'
  | 'fill'
  | 'flexDirection'
  | 'flexGrow'
  | 'flexShrink'
  | 'flexWrap'
  | 'font'
  | 'fontSize'
  | 'focus'
  | 'focusVisible'
  | 'gap'
  | 'gridAutoFlow'
  | 'gridColumns'
  | 'gridTemplateColumns'
  | 'gridTemplateRows'
  | 'group'
  | 'height'
  | 'hover'
  | 'justifyContent'
  | 'justifyItems'
  | 'left'
  | 'margin'
  | 'maxWidth'
  | 'minHeight'
  | 'minWidth'
  | 'opacity'
  | 'overflow'
  | 'padding'
  | 'pointerEvents'
  | 'position'
  | 'resize'
  | 'right'
  | 'stroke'
  | 'textAlign'
  | 'textDecoration'
  | 'textOverflow'
  | 'textWrap'
  | 'top'
  | 'transform'
  | 'transformOrigin'
  | 'transition'
  | 'translate'
  | 'visibility'
  | 'userSelect'
  | 'width'
  | 'wordBreak'
  | 'zIndex';

export type CSSProps = {
  [K in CSSPropKeys]?: string;
};
