import type { ReactNode, ElementType } from 'react';
import type {
  ComponentRefProps,
  SpinnerBorder,
  Loading,
  Variant,
  Size,
  DefaultScale,
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
import type {
  UnstyledSpinnerBarProps,
  UnstyledSpinnerTrailProps,
  UnstyledSpinnerInnerBorder,
  UnstyledSpinnerOuterBorder
} from '../UnstyledSpinner/UnstyledSpinner.types';

export type UnstyledButtonRippleProps = ComponentRefProps<'span'>;

export type UnstyledButtonSpinnerProps = {
  value?: number;
  thickness?: number;
  border?: SpinnerBorder;
} & ComponentRefProps<'svg'>;

export type UnstyledButtonBarProps = UnstyledSpinnerBarProps;
export type UnstyledButtonTrailProps = UnstyledSpinnerTrailProps;
export type UnstyledButtonInnerBorderProps = UnstyledSpinnerInnerBorder;
export type UnstyledButtonOuterBorderProps = UnstyledSpinnerOuterBorder;

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
  scale?: DefaultScale;
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
