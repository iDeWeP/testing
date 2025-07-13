import type {
  Radius,
  ComponentRefProps,
  Border,
  DefaultBorder,
  RippleEffect,
  SVGNodeProps,
  Variant,
  DefaultSize,
  Color,
  Ripple,
  MergeProps
} from '../../types';
import type {
  UnstyledCheckboxConfigProps,
  UnstyledCheckboxProps
} from '../UnstyledCheckbox/UnstyledCheckbox.types';

export type CheckboxContainerProps = {
  radius?: Radius;
  rt?: Radius;
  rb?: Radius;
  rl?: Radius;
  rr?: Radius;
  rtl?: Radius;
  rtr?: Radius;
  rbl?: Radius;
  rbr?: Radius;
} & ComponentRefProps<'div'>;

export type CheckboxIconProps = Omit<ComponentRefProps<'svg'>, 'by' | 'radius'>;

export type CheckboxTrailProps = {
  border?: Border;
  bx?: DefaultBorder;
  by?: DefaultBorder;
  bt?: DefaultBorder;
  bb?: DefaultBorder;
  bl?: DefaultBorder;
  br?: DefaultBorder;
} & ComponentRefProps<'span'>;

export type CheckboxRippleProps = {
  effect?: RippleEffect;
} & ComponentRefProps<'span'>;

export type CheckboxComponentsProps = {
  container?: CheckboxContainerProps;
  icon?: CheckboxIconProps;
  trail?: CheckboxTrailProps;
  ripple?: CheckboxRippleProps;
};

export type CheckboxOptionalProps = {
  checked?: boolean;
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  children?: SVGNodeProps;
};

export type CheckboxDefaultProps = {
  variant?: Variant;
  size?: DefaultSize;
  radius?: Radius;
  color?: Color;
  componentsProps?: CheckboxComponentsProps;
  ripple?: Ripple;
};

export type CheckboxConfigProps = MergeProps<
  UnstyledCheckboxConfigProps,
  CheckboxDefaultProps
>;

export type CheckboxProps = MergeProps<
  UnstyledCheckboxProps,
  CheckboxDefaultProps & CheckboxOptionalProps
>;
