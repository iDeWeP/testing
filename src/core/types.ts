import type {
  ElementType,
  ComponentPropsWithRef,
  ReactElement,
  CSSProperties
} from 'react';

export type ComponentRefProps<E extends ElementType> = Omit<
  ComponentPropsWithRef<E>,
  'color'
>;

export type ComponentConfig<P> = {
  props: Required<P>;
};

export type SVGNodeProps = ReactElement<ComponentPropsWithRef<'svg'>>;

export type MergeProps<D extends object, T extends object> = Omit<D, keyof T> &
  T;

export type MergeComponentProps<E extends ElementType, T> = Omit<
  ComponentPropsWithRef<E>,
  keyof T
> &
  T;

export type Theme = 'light' | 'dark';
export type Loading = boolean | 'left' | 'right';
export type Collision = 'none' | 'shift' | 'flip';
export type Trigger =
  | 'none'
  | 'hover'
  | 'click'
  | 'focus'
  | 'none-hover'
  | 'none-click'
  | 'none-focus'
  | 'hover-none'
  | 'hover-click'
  | 'hover-focus'
  | 'click-none'
  | 'click-hover'
  | 'click-focus'
  | 'focus-none'
  | 'focus-hover'
  | 'focus-click';
export type Peak = 'auto' | number;
export type Variant = 'outlined' | 'text' | 'light' | 'solid';
export type InputVariant = 'default' | 'light' | 'outlined';
export type Orientation = 'row' | 'col';
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
export type CrossPlacement = 'start' | 'center' | 'end';
export type SidePlacement = 'left' | 'right';
export type RipplePlacement = 'normal' | 'inner';
export type MainAxis = DefaultPlacement;
export type CrossAxis = CrossPlacement;
export type ArrowOffset = [number | string, number | string];
export type Size = 'unset' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type DefaultSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type CardSize =
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
export type InputSize = 'sm' | 'md' | 'lg';
export type Padding =
  | 'unset'
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl';
export type Margin =
  | 'unset'
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl';
export type Border = 'unset' | 'none' | 'auto' | 'set';
export type DefaultBorder = 'unset' | 'none' | 'set';
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
export type TrailColor = Color | 'transparent';
export type Shadow =
  | 'unset'
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl';
export type Font = 'unset' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type Gap = 'unset' | 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type Effect = 'unset' | 'shadow';
export type RippleEffect = 'normal';
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
export type PopperTransition = 'fade' | GrowTransition;
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

export type CollisionFunction = (placement: Placement) => void;

export type Classes = {
  inputType?: 'input' | 'textarea';
  theme?: Theme;
  focused?: boolean;
  shifted?: boolean;
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  stateful?: boolean;
  followCursor?: boolean;
  variant?: Variant;
  inputVariant?: InputVariant;
  orientation?: Orientation;
  defaultPlacement?: DefaultPlacement;
  sidePlacement?: SidePlacement;
  ripplePlacement?: RipplePlacement;
  size?: Size;
  defaultSize?: DefaultSize;
  cardSize?: CardSize;
  inputSize?: InputSize;
  resize?: boolean;
  padding?: Padding;
  px?: Padding;
  py?: Padding;
  pt?: Padding;
  pb?: Padding;
  pl?: Padding;
  pr?: Padding;
  margin?: Margin;
  mx?: Margin;
  my?: Margin;
  mt?: Margin;
  mb?: Margin;
  ml?: Margin;
  mr?: Margin;
  border?: Border;
  bx?: DefaultBorder;
  by?: DefaultBorder;
  bt?: DefaultBorder;
  bb?: DefaultBorder;
  bl?: DefaultBorder;
  br?: DefaultBorder;
  radius?: Radius;
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
  trailColor?: TrailColor;
  shadow?: Shadow;
  invisible?: boolean;
  blur?: boolean;
  gap?: Gap;
  gx?: Gap;
  gy?: Gap;
  transition?: Transition;
  rippleEffect?: RippleEffect;
  hasRipple?: boolean;
  decorated?: boolean;
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
