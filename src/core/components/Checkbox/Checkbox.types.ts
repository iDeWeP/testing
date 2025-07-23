import type {
  CheckableVariant,
  DefaultSize,
  Color,
  Ripple,
  MergeProps
} from '../../types';
import type {
  UnstyledCheckboxContainerProps,
  UnstyledCheckboxIconProps,
  UnstyledCheckboxTrailProps,
  UnstyledCheckboxRippleProps,
  UnstyledCheckboxOptionalProps,
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

export type CheckboxOptionalProps = UnstyledCheckboxOptionalProps;

export type CheckboxDefaultProps = {
  variant?: CheckableVariant;
  size?: DefaultSize;
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
