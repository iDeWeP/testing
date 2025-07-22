import type {
  ElementType,
  ComponentPropsWithRef,
  ReactElement,
  CSSProperties,
  ReactNode
} from 'react';

// LIBRARY TYPES
export type Theme = 'light' | 'dark';
export type Loading = boolean | 'left' | 'right';
export type Collision = 'unset' | 'shift' | 'flip';
export type Trigger =
  | 'unset'
  | 'hover'
  | 'click'
  | 'focus'
  | 'unset-hover'
  | 'unset-click'
  | 'unset-focus'
  | 'hover-unset'
  | 'hover-click'
  | 'hover-focus'
  | 'click-unset'
  | 'click-hover'
  | 'click-focus'
  | 'focus-unset'
  | 'focus-hover'
  | 'focus-click';
export type Peak = 'auto' | number;
export type Variant = 'outlined' | 'text' | 'light' | 'solid';
export type InputVariant = 'default' | 'light' | 'outlined';
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
export type Orientation = 'row' | 'col';
export type DefaultPosition = 'absolute' | 'fixed';
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
export type CornerPlacement =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';
export type CrossPlacement = 'start' | 'center' | 'end';
export type SidePlacement = 'start' | 'end';
export type CardPlacement = 'default' | 'top' | 'center' | 'bottom';
export type MainAxis = DefaultPlacement;
export type CrossAxis = CrossPlacement;
export type ArrowOffset = [number | string, number | string];
export type Overlap = 'square' | 'rounded' | 'circular';
export type Size =
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
export type DefaultSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type InputSize = 'sm' | 'md' | 'lg';
export type Scale = 'default' | 'square' | 'circle';
export type DefaultScale = 'default' | 'square';
export type SwitchScale = 'default' | 'slider';
export type RippleScale = 'default' | 'peer';
export type Width = 'default' | 'fit' | 'full';
export type Padding =
  | 'unset'
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
export type Margin =
  | 'unset'
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
export type Spacing =
  | 'unset'
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
export type Border = 'unset' | 'none' | 'set' | 'auto';
export type DefaultBorder = 'unset' | 'none' | 'set';
export type SpinnerBorder = 'unset' | 'auto' | 'set';
export type Radius =
  | 'unset'
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'full';
export type Color =
  | 'unset'
  | 'surface'
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'warning'
  | 'error'
  | 'surface-on'
  | 'neutral-on'
  | 'primary-on'
  | 'secondary-on'
  | 'tertiary-on'
  | 'success-on'
  | 'warning-on'
  | 'error-on';
export type Shadow =
  | 'unset'
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl';
export type Font =
  | 'unset'
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
export type Gap =
  | 'unset'
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
export type Effect = 'unset' | 'shadow';
export type RippleEffect = 'default';
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
export type Transition =
  | 'fade'
  | GrowTransition
  | SlideTransition
  | CollapseTransition;
export type DefaultTransition = 'fade' | GrowTransition;
export type Ripple = 'none' | 'default';
export type Cursor = {
  x: number;
  y: number;
};

/*
 *  CLASSNAME TYPES
 */
export type ClassName = string | undefined;

export type Classes = {
  inputType?: 'input' | 'textarea';
  barType?: 'bar' | 'trail';
  theme?: Theme;
  on?: boolean;
  checked?: boolean;
  loading?: Loading;
  spin?: boolean;
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  stateful?: boolean;
  followCursor?: boolean;
  variant?: Variant;
  inputVariant?: InputVariant;
  layout?: Layout;
  orientation?: Orientation;
  defaultPosition?: DefaultPosition;
  defaultPlacement?: DefaultPlacement;
  cornerPlacement?: CornerPlacement;
  sidePlacement?: SidePlacement;
  cardPlacement?: CardPlacement;
  float?: boolean;
  overlap?: Overlap;
  size?: Size;
  defaultSize?: DefaultSize;
  inputSize?: InputSize;
  resize?: boolean;
  scale?: Scale;
  defaultScale?: DefaultScale;
  switchScale?: SwitchScale;
  rippleScale?: RippleScale;
  width?: Width;
  padding?: Padding;
  p?: Padding;
  px?: Padding;
  py?: Padding;
  pt?: Padding;
  pb?: Padding;
  pl?: Padding;
  pr?: Padding;
  margin?: Margin;
  m?: Margin;
  mx?: Margin;
  my?: Margin;
  mt?: Margin;
  mb?: Margin;
  ml?: Margin;
  mr?: Margin;
  spacing?: Spacing;
  border?: Border;
  defaultBorder?: DefaultBorder;
  b?: DefaultBorder;
  bx?: DefaultBorder;
  by?: DefaultBorder;
  bt?: DefaultBorder;
  bb?: DefaultBorder;
  bl?: DefaultBorder;
  br?: DefaultBorder;
  radius?: Radius;
  r?: Radius;
  rt?: Radius;
  rb?: Radius;
  rl?: Radius;
  rr?: Radius;
  rtl?: Radius;
  rtr?: Radius;
  rbl?: Radius;
  rbr?: Radius;
  font?: Font;
  color?: Color;
  shadow?: Shadow;
  ring?: Color;
  invisible?: boolean;
  blur?: boolean;
  gap?: Gap;
  gx?: Gap;
  gy?: Gap;
  effect?: Effect;
  rippleEffect?: RippleEffect;
  transition?: Transition;
  decorated?: ReactNode;
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
  | 'ring'
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

export type CSSStyles = Record<string, CSSProps>;

/*
 *  STYLE PROPS
 */
export type AnimationProps = {
  enterDuration?: number;
  exitDuration?: number;
  enterDelay?: number;
  exitDelay?: number;
  enteredStyle?: CSSProperties;
  exitedStyle?: CSSProperties;
  enteringStyle?: CSSProperties;
  exitingStyle?: CSSProperties;
};

/*
 *  COMPONENTS PROPS TYPES
 */
export type ComponentRefProps<E extends ElementType> = Omit<
  ComponentPropsWithRef<E>,
  'color' | 'scale'
>;

export type ComponentConfig<P> = {
  props: Required<P>;
};

export type SVGNodeProps = ReactElement<ComponentPropsWithRef<'svg'>>;

export type MergeProps<D extends object, T extends object> = Omit<
  D,
  keyof T | 'scale'
> &
  T;
