import type { Variant, Size, Color, MergeProps } from '../../types';
import type {
  UnstyledSpinnerBarProps,
  UnstyledSpinnerOptionalProps,
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

export type SpinnerOptionalProps = UnstyledSpinnerOptionalProps;

export type SpinnerDefaultProps = {
  spin?: boolean;
  value?: number;
  variant?: Variant;
  size?: Size;
  thickness?: number;
  color?: Color;
  componentsProps?: SpinnerComponentsProps;
};

export type SpinnerConfigProps = MergeProps<
  UnstyledSpinnerConfigProps,
  SpinnerDefaultProps
>;

export type SpinnerProps = MergeProps<
  UnstyledSpinnerProps,
  SpinnerDefaultProps & SpinnerOptionalProps
>;
