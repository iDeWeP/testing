import type {
  ElementType,
  ComponentPropsWithRef,
  ReactElement,
  CSSProperties
} from 'react';

export type MergeProps<D extends object, T extends object> = Omit<D, keyof T> &
  T;

export type MergeComponentProps<E extends ElementType, T> = Omit<
  ComponentPropsWithRef<E>,
  keyof T
> &
  T;

export type ComponentRefProps<E extends ElementType> = Omit<
  ComponentPropsWithRef<E>,
  'offset' | 'scale' | 'radius' | 'color'
>;
// 'size' 'rotate' | 'content'>

export type ComponentConfig<P> = {
  props: Required<P>;
};

export type SVGNodeProps = ReactElement<ComponentPropsWithRef<'svg'>>;

export type Loading = boolean | 'left' | 'right';
export type Collision = 'none' | 'shift' | 'flip';
export type Trigger =
  | 'none'
  | 'hover'
  | 'click'
  | 'none-hover'
  | 'none-click'
  | 'hover-none'
  | 'hover-click'
  | 'click-none'
  | 'click-hover';
export type Peak = 'auto' | number;
/* export type Layout =
  | 'default'
  | 'row'
  | 'col'
  | 'left'
  | 'center'
  | 'right'
  | 'dashboard'
  | 'dashboard-left'
  | 'dashboard-center'
  | 'dashboard-right'; */
export type Variant = 'none' | 'plain' | 'text' | 'light' | 'surface' | 'solid';
export type InputVariant =
  | 'default'
  | 'light'
  | 'outlined'
  | 'default-plain'
  | 'light-plain'
  | 'outlined-plain';
export type DefaultInputVariant = 'default' | 'light' | 'outlined';
export type Theme = 'light' | 'dark';
export type Orientation = 'vertical' | 'horizontal';
export type Placement =
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
export type DefaultPlacement = 'top' | 'bottom' | 'left' | 'right';
/* export type InnerPlacement =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'; */
/*export type CornerPlacement =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'; */
export type CrossPlacement = 'start' | 'center' | 'end';
export type SidePlacement = 'left' | 'right';
export type MainAxis = DefaultPlacement;
export type CrossAxis = CrossPlacement;
/* export type Offset =
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
  | 'xl-xl'; */
export type ArrowOffset = [number | string, number | string];
// export type Overlap = 'square' | 'rounded' | 'circular';
export type Size = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type DefaultSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type BoxSize =
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xs-xs'
  | 'sm-sm'
  | 'md-md'
  | 'lg-lg'
  | 'xl-xl'
  | 'xxl-xxl';
export type InputSize = 'sm' | 'md' | 'lg';
// export type TextareaSize = 'sm' | 'md' | 'lg' | 'full';
export type Scale = 'normal' | 'fit' | 'full';
export type SizeScale = 'normal' | 'text';
export type ButtonScale = 'normal' | 'full' | 'fit' | 'square';
// export type IconScale = 'default' | 'text' | 'square' | 'text-square';
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
export type Radius = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full';
export type Weight = 'normal' | 'semi' | 'bold';
export type Underline = 'normal' | 'none' | 'hover' | 'always';
export type WordBreak = 'normal' | 'words' | 'all' | 'keep';
export type TextWrap = 'wrap' | 'nowrap' | 'balance' | 'pretty';
export type TextAlign = 'left' | 'center' | 'right' | 'justify';
export type TextOverflow = 'clip' | 'truncate' | 'ellipsis';
export type Color =
  | 'surface'
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'warning'
  | 'error';
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
export type GrowTransition = 'grow' | 'grow-fade';
export type SlideTransition =
  | 'slide-top'
  | 'slide-bottom'
  | 'slide-left'
  | 'slide-right'
  | 'slide-top-fade'
  | 'slide-bottom-fade'
  | 'slide-left-fade'
  | 'slide-right-fade';
export type CollapseTransition =
  | 'collapse-x'
  | 'collapse-y'
  | 'collapse-x-fade'
  | 'collapse-y-fade';
export type Effect = 'none' | 'shadow';
export type RippleEffect = 'normal';
// export type AccordionEffect = 'none' | 'opacity';
export type Transition =
  | 'fade'
  | GrowTransition
  | SlideTransition
  | CollapseTransition;
export type Ripple = 'none' | 'normal';

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

export type Classes = {
  focused?: boolean;
  shifted?: boolean;
  valid?: boolean;
  invalid?: boolean;
  loading?: Loading;
  spin?: boolean;
  stateful?: boolean;
  disabled?: boolean;
  followCursor?: boolean;
  variant?: Variant;
  inputVariant?: InputVariant;
  orientation?: Orientation;
  placement?: Placement;
  defaultPlacement?: DefaultPlacement;
  sidePlacement?: SidePlacement;
  float?: boolean;
  relative?: boolean;
  size?: Size;
  defaultSize?: DefaultSize;
  inputSize?: InputSize;
  spacing?: BoxSize;
  scale?: Scale;
  sizeScale?: SizeScale;
  buttonScale?: ButtonScale;
  border?: Border;
  radius?: Radius;
  color?: Color;
  margin?: Margin;
  weight?: Weight;
  underline?: Underline;
  wordBreak?: WordBreak;
  textWrap?: TextWrap;
  textAlign?: TextAlign;
  textOverflow?: TextOverflow;
  direction?: Direction;
  flow?: Flow;
  wrap?: Wrap;
  justifyContent?: JustifyContent;
  alignContent?: AlignContent;
  justifyItems?: JustifyItems;
  alignItems?: AlignItems;
  gap?: Gap;
  colGap?: Gap;
  rowGap?: Gap;
  invisible?: boolean;
  blur?: boolean;
  effect?: Effect;
  rippleEffect?: RippleEffect;
  transition?: Transition;
  decorated?: boolean;
  hasRipple?: boolean;
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
  | 'transitionDuration'
  | 'transitionTimingFunction'
  | 'translate'
  | 'visibility'
  | 'userSelect'
  | 'width'
  | 'wordBreak'
  | 'zIndex';

export type CSSProps = {
  [K in CSSPropKeys]?: string;
};
