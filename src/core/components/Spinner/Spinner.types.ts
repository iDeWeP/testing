import type {
  ComponentRefProps,
  Variant,
  DefaultSize,
  Color,
  MergeProps
} from '../../types';
import type {
  UnstyledSpinnerConfigProps,
  UnstyledSpinnerProps
} from '../UnstyledSpinner/UnstyledSpinner.types';

export type SpinnerBarProps = ComponentRefProps<'circle'>;
export type SpinnerTrailProps = ComponentRefProps<'circle'>;
export type SpinnerInnerBorder = ComponentRefProps<'circle'>;
export type SpinnerOuterBorder = ComponentRefProps<'circle'>;

export type SpinnerComponentsProps = {
  bar?: SpinnerBarProps;
  trail?: SpinnerTrailProps;
  innerBorder?: SpinnerInnerBorder;
  outerBorder?: SpinnerOuterBorder;
};

type SpinnerOptionalProps = {
  disabled?: boolean;
  trail?: boolean;
};

export type SpinnerDefaultProps = {
  spin?: boolean;
  value?: number;
  variant?: Variant;
  size?: DefaultSize;
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
