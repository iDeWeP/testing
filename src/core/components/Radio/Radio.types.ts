import type {
  SVGNodeProps,
  CheckableVariant,
  DefaultSize,
  Color,
  MergeProps
} from '../../types';
import type {
  UnstyledCheckboxContainerProps,
  UnstyledCheckboxIconProps,
  UnstyledCheckboxTrailProps,
  UnstyledCheckboxRippleProps,
  UnstyledCheckboxConfigProps,
  UnstyledCheckboxProps
} from '../UnstyledCheckbox/UnstyledCheckbox.types';

export type RadioContainerProps = UnstyledCheckboxContainerProps;
export type RadioIconProps = UnstyledCheckboxIconProps;
export type RadioTrailProps = UnstyledCheckboxTrailProps;
export type RadioRippleProps = UnstyledCheckboxRippleProps;

export type RadioComponentsProps = {
  container?: RadioContainerProps;
  icon?: RadioIconProps;
  trail?: RadioTrailProps;
  ripple?: RadioRippleProps;
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
  color?: Color;
  componentsProps?: RadioComponentsProps;
};

export type RadioConfigProps = MergeProps<
  UnstyledCheckboxConfigProps,
  DefaultProps
>;

export type RadioProps = MergeProps<
  UnstyledCheckboxProps,
  DefaultProps & OptionalProps
>;
