import type {
  ReactNode,
  CSSProperties,
  ElementType,
  ComponentPropsWithRef,
  ReactElement
} from 'react';

// LIBRARY TYPES
export type Theme = 'light' | 'dark';
export type Loading = boolean | 'left' | 'right';
export type Cursor = {
  x: number;
  y: number;
};
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
export type CheckableVariant =
  | 'text'
  | 'light'
  | 'outlined'
  | 'solid'
  | 'text-text'
  | 'text-outlined'
  | 'text-light'
  | 'text-solid'
  | 'outlined-text'
  | 'outlined-outlined'
  | 'outlined-light'
  | 'outlined-solid'
  | 'light-text'
  | 'light-outlined'
  | 'light-light'
  | 'light-solid'
  | 'solid-text'
  | 'solid-outlined'
  | 'solid-light'
  | 'solid-solid';
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
export type DefaultSpacing =
  | 'unset'
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl';
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
export type Scale = 'none' | 'default' | 'square' | 'circle';
export type DefaultScale = 'default' | 'square';
export type SwitchScale = 'default' | 'slider';
export type RippleScale = 'default' | 'peer';
export type Width = 'default' | 'fit' | 'full';
export type Padding = Spacing;
export type Margin = Spacing;
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
export type Font = Spacing;
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
export type Shadow = DefaultSpacing;
export type Ring = Color;
export type Gap = Spacing;
export type GroupGap =
  | Spacing
  | '-none'
  | '-xs'
  | '-sm'
  | '-md'
  | '-lg'
  | '-xl'
  | '-xxl'
  | '-xs-xs'
  | '-sm-sm'
  | '-md-md'
  | '-lg-lg'
  | '-xl-xl'
  | '-xxl-xxl';
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
  clickable?: boolean;
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
  ring?: Ring;
  invisible?: boolean;
  blur?: boolean;
  gap?: Gap;
  gx?: Gap;
  gy?: Gap;
  groupGap?: GroupGap;
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
  'scale' | 'color'
>;

export type ComponentConfig<T> = {
  props: Required<T>;
};

export type SVGNodeProps = ReactElement<ComponentPropsWithRef<'svg'>>;

export type MergeProps<D extends object, T extends object> = Omit<
  D,
  keyof T | 'scale'
> &
  T;

export type OmitRing<T> = Omit<T, 'ring'>;
export type OmitGaps<T> = Omit<T, 'gx' | 'gy'>;
export type OmitDecorators<T> = Omit<T, 'startDecorator' | 'endDecorator'>;
export type OmitMargin<T> = Omit<
  T,
  'margin' | 'm' | 'mx' | 'my' | 'mt' | 'mb' | 'ml' | 'mr'
>;
export type OmitPlacement<T> = Omit<T, 'placement'>;
export type OmitOrientation<T> = Omit<T, 'orientation'>;
export type OmitRadius<T> = Omit<T, 'radius' | 'r'>;
