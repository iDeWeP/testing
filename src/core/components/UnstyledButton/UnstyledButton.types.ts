import type { ReactNode, ElementType } from 'react';
import type {
  ComponentRefProps,
  SpinnerBorder,
  Loading,
  Variant,
  Size,
  Scale,
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
export type UnstyledButtonBarProps = ComponentRefProps<'circle'>;
export type UnstyledButtonTrailProps = ComponentRefProps<'circle'>;
export type UnstyledButtonInnerBorderProps = ComponentRefProps<'circle'>;
export type UnstyledButtonOuterBorderProps = ComponentRefProps<'circle'>;
export type UnstyledButtonSpinnerProps = {
  value?: number;
  thickness?: number;
  border?: SpinnerBorder;
} & ComponentRefProps<'svg'>;

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
  variant?: Variant;
  size?: Size;
  scale?: Scale;
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
