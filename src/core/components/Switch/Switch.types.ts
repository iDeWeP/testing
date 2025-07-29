import type {
  SVGNodeProps,
  CheckableVariant,
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

type OptionalProps = {
  checked?: boolean;
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  children?: SVGNodeProps;
};

type DefaultProps = {
  variant?: CheckableVariant;
  size?: DefaultSize;
  scale?: SwitchScale;
  color?: Color;
  componentsProps?: SwitchComponentsProps;
  ripple?: Ripple;
};

export type SwitchConfigProps = MergeProps<
  UnstyledSwitchConfigProps,
  DefaultProps
>;

export type SwitchProps = MergeProps<
  UnstyledSwitchProps,
  DefaultProps & OptionalProps
>;
