import type { Variant, Size, Color, MergeProps } from '../../types';
import type {
  UnstyledSpinnerBarProps,
  UnstyledSpinnerConfigProps,
  UnstyledSpinnerProps
} from '../UnstyledSpinner/UnstyledSpinner.types';

export type SpinnerBarProps = UnstyledSpinnerBarProps;

export type SpinnerComponentsProps = {
  bar?: SpinnerBarProps;
  trail?: SpinnerBarProps;
  innerBorder?: SpinnerBarProps;
  outerBorder?: SpinnerBarProps;
};

type OptionalProps = {
  disabled?: boolean;
  trail?: boolean;
};

type DefaultProps = {
  variant?: Variant;
  size?: Size;
  color?: Color;
  componentsProps?: SpinnerComponentsProps;
};

export type SpinnerConfigProps = MergeProps<
  UnstyledSpinnerConfigProps,
  DefaultProps
>;

export type SpinnerProps = MergeProps<
  UnstyledSpinnerProps,
  DefaultProps & OptionalProps
>;
