import type { ElementType } from 'react';
import type {
  Variant,
  Size,
  DefaultScale,
  Color,
  MergeProps
} from '../../types';
import type {
  UnstyledButtonConfigProps,
  UnstyledButtonProps
} from '../UnstyledButton/UnstyledButton.types';
import type { UnstyledToggleButtonRippleProps } from '../UnstyledToggleButton/UnstyledToggleButton.types';

export type ToggleButtonRippleProps = UnstyledToggleButtonRippleProps;

export type ToggleButtonComponentsProps = {
  ripple?: ToggleButtonRippleProps;
};

type OptionalProps = {
  checked?: boolean;
  disabled?: boolean;
};

type DefaultProps = {
  variant?: Variant;
  size?: Size;
  scale?: DefaultScale;
  color?: Color;
  componentsProps?: ToggleButtonComponentsProps;
};

export type ToggleButtonConfigProps = MergeProps<
  UnstyledButtonConfigProps,
  DefaultProps
>;

export type ToggleButtonProps<E extends ElementType> = MergeProps<
  UnstyledButtonProps<E>,
  DefaultProps & OptionalProps
>;
