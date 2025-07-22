import type {
  Variant,
  DefaultSize,
  SwitchScale,
  Color,
  Ripple,
  MergeProps
} from '../../types';
import type {
  UnstyledSwitchContainerProps,
  UnstyledSwitchBarProps,
  UnstyledSwitchTrailProps,
  UnstyledSwitchIconProps,
  UnstyledSwitchRippleProps,
  UnstyledSwitchOptionalProps,
  UnstyledSwitchConfigProps,
  UnstyledSwitchProps
} from '../UnstyledSwitch/UnstyledSwitch.types';

export type SwitchContainerProps = UnstyledSwitchContainerProps;
export type SwitchBarProps = UnstyledSwitchBarProps;
export type SwitchTrailProps = UnstyledSwitchTrailProps;
export type SwitchIconProps = UnstyledSwitchIconProps;
export type SwitchRippleProps = UnstyledSwitchRippleProps;

export type SwitchComponentsProps = {
  container?: SwitchContainerProps;
  bar?: SwitchBarProps;
  trail?: SwitchTrailProps;
  icon?: SwitchIconProps;
  ripple?: SwitchRippleProps;
};

export type SwitchOptionalProps = UnstyledSwitchOptionalProps;

export type SwitchDefaultProps = {
  variant?: Variant;
  size?: DefaultSize;
  scale?: SwitchScale;
  color?: Color;
  componentsProps?: SwitchComponentsProps;
  ripple?: Ripple;
};

export type SwitchConfigProps = MergeProps<
  UnstyledSwitchConfigProps,
  SwitchDefaultProps
>;

export type SwitchProps = MergeProps<
  UnstyledSwitchProps,
  SwitchDefaultProps & SwitchOptionalProps
>;
