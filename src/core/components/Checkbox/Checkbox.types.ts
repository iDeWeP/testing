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

export type CheckboxContainerProps = UnstyledCheckboxContainerProps;
export type CheckboxIconProps = UnstyledCheckboxIconProps;
export type CheckboxTrailProps = UnstyledCheckboxTrailProps;
export type CheckboxRippleProps = UnstyledCheckboxRippleProps;

export type CheckboxComponentsProps = {
  container?: CheckboxContainerProps;
  icon?: CheckboxIconProps;
  trail?: CheckboxTrailProps;
  ripple?: CheckboxRippleProps;
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
  componentsProps?: CheckboxComponentsProps;
};

export type CheckboxConfigProps = MergeProps<
  UnstyledCheckboxConfigProps,
  DefaultProps
>;

export type CheckboxProps = MergeProps<
  UnstyledCheckboxProps,
  DefaultProps & OptionalProps
>;
