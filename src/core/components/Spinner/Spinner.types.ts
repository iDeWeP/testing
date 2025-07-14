import type { Variant, Size, Color, MergeProps } from '../../types';
import type {
  UnstyledSpinnerBarProps,
  UnstyledSpinnerTrailProps,
  UnstyledSpinnerInnerBorder,
  UnstyledSpinnerOuterBorder,
  UnstyledSpinnerOptionalProps,
  UnstyledSpinnerConfigProps,
  UnstyledSpinnerProps
} from '../UnstyledSpinner/UnstyledSpinner.types';

export type SpinnerBarProps = UnstyledSpinnerBarProps;
export type SpinnerTrailProps = UnstyledSpinnerTrailProps;
export type SpinnerInnerBorder = UnstyledSpinnerInnerBorder;
export type SpinnerOuterBorder = UnstyledSpinnerOuterBorder;

export type SpinnerComponentsProps = {
  bar?: SpinnerBarProps;
  trail?: SpinnerTrailProps;
  innerBorder?: SpinnerInnerBorder;
  outerBorder?: SpinnerOuterBorder;
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
