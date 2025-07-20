import type {
  Variant,
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

export type RadioOptionalProps = UnstyledCheckboxOptionalProps;

export type RadioDefaultProps = {
  variant?: Variant;
  size?: DefaultSize;
  color?: Color;
  componentsProps?: RadioComponentsProps;
  ripple?: Ripple;
};

export type RadioConfigProps = MergeProps<
  UnstyledCheckboxConfigProps,
  RadioDefaultProps
>;

export type RadioProps = MergeProps<
  UnstyledCheckboxProps,
  RadioDefaultProps & RadioOptionalProps
>;
