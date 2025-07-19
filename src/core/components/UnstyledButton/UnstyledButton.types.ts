import type { ComponentPropsWithRef, ReactNode, ElementType } from 'react';
import type {
  ComponentRefProps,
  MergeProps,
  Variant,
  Size,
  SpinnerBorder,
  Color,
  Loading,
  DefaultScale,
  Radius,
  Effect,
  Ripple
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
export type UnstyledButtonSpinnerProps = MergeProps<
  ComponentPropsWithRef<'svg'>,
  {
    spin?: boolean;
    value?: number;
    variant?: Variant;
    size?: Size;
    thickness?: number;
    border?: SpinnerBorder;
    color?: Color;
    trail?: boolean;
  }
>;
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
  Omit<UnstyledContainerConfigProps, 'ring'>,
  UnstyledButtonDefaultProps
>;

export type UnstyledButtonProps<E extends ElementType> = MergeProps<
  Omit<UnstyledContainerProps<E>, 'ring'>,
  UnstyledButtonDefaultProps & UnstyledButtonOptionalProps
>;
