import type { ReactNode, ElementType } from 'react';
import type {
  ComponentRefProps,
  Loading,
  Variant,
  Size,
  ButtonScale,
  Radius,
  Color,
  Effect,
  Ripple,
  MergeProps
} from '../../types';
import type {
  UnstyledContainerConfigProps,
  UnstyledContainerProps
} from '../UnstyledContainer/UnstyledContainer.types';

export type UnstyledButtonRippleProps = ComponentRefProps<'span'>;
export type UnstyledButtonSpinnerProps = ComponentRefProps<'svg'>;
export type UnstyledButtonBarProps = ComponentRefProps<'circle'>;
export type UnstyledButtonTrailProps = ComponentRefProps<'circle'>;
export type UnstyledButtonInnerBorderProps = ComponentRefProps<'circle'>;
export type UnstyledButtonOuterBorderProps = ComponentRefProps<'circle'>;

export type UnstyledButtonComponentsProps = {
  ripple?: UnstyledButtonRippleProps;
  spinner?: UnstyledButtonSpinnerProps;
  bar?: UnstyledButtonBarProps;
  trail?: UnstyledButtonTrailProps;
  innerBorder?: UnstyledButtonInnerBorderProps;
  outerBorder?: UnstyledButtonOuterBorderProps;
};

export type UnstyledButtonOptionalProps = {
  checked?: boolean;
  loading?: Loading;
  disabled?: boolean;
  leftDecorator?: ReactNode;
  rightDecorator?: ReactNode;
};

export type UnstyledButtonDefaultProps = {
  as?: ElementType;
  variant?: Variant;
  size?: Size;
  scale?: ButtonScale;
  radius?: Radius;
  color?: Color;
  effect?: Effect;
  componentsProps?: UnstyledButtonComponentsProps;
  ripple?: Ripple;
};

export type UnstyledButtonConfigProps = MergeProps<
  UnstyledContainerConfigProps,
  UnstyledButtonDefaultProps
>;

export type UnstyledButtonProps<E extends ElementType> = MergeProps<
  UnstyledContainerProps<E>,
  UnstyledButtonDefaultProps & UnstyledButtonOptionalProps
>;
