import type {
  ComponentRefProps,
  Variant,
  Size,
  Color,
  MergeProps
} from '../../types';
import type {
  UnstyledSpinnerConfigProps,
  UnstyledSpinnerProps
} from '../UnstyledSpinner/UnstyledSpinner.types';

export type CircularProgressLabelProps = ComponentRefProps<'span'>;
export type CircularProgressBarProps = ComponentRefProps<'circle'>;
export type CircularProgressTrailProps = ComponentRefProps<'circle'>;
export type CircularProgressInnerBorder = ComponentRefProps<'circle'>;
export type CircularProgressOuterBorder = ComponentRefProps<'circle'>;

export type CircularProgressComponentsProps = {
  label?: CircularProgressLabelProps;
  bar?: CircularProgressBarProps;
  trail?: CircularProgressTrailProps;
  innerBorder?: CircularProgressInnerBorder;
  outerBorder?: CircularProgressOuterBorder;
};

export type CircularProgressOptionalProps = {
  disabled?: boolean;
  trail?: boolean;
};

export type CircularProgressDefaultProps = {
  spin?: boolean;
  value?: number;
  variant?: Variant;
  size?: Size;
  thickness?: number;
  color?: Color;
  componentsProps?: CircularProgressComponentsProps;
};

export type CircularProgressConfigProps = MergeProps<
  UnstyledSpinnerConfigProps,
  CircularProgressDefaultProps
>;

export type CircularProgressProps = MergeProps<
  UnstyledSpinnerProps,
  CircularProgressDefaultProps & CircularProgressOptionalProps
>;
