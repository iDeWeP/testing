import type {
  ComponentRefProps,
  Variant,
  Size,
  Color,
  Gap,
  MergeProps
} from '../../types';
import type {
  UnstyledSpinnerBarProps,
  UnstyledSpinnerOptionalProps,
  UnstyledSpinnerConfigProps,
  UnstyledSpinnerProps
} from '../UnstyledSpinner/UnstyledSpinner.types';

export type CircularProgressContainerProps = ComponentRefProps<'div'>;
export type CircularProgressLabelProps = ComponentRefProps<'span'>;
export type CircularProgressBarProps = UnstyledSpinnerBarProps;

export type CircularProgressComponentsProps = {
  container?: CircularProgressContainerProps;
  label?: CircularProgressLabelProps;
  bar?: CircularProgressBarProps;
  trail?: CircularProgressBarProps;
  innerBorder?: CircularProgressBarProps;
  outerBorder?: CircularProgressBarProps;
};

export type CircularProgressOptionalProps = UnstyledSpinnerOptionalProps;

export type CircularProgressDefaultProps = {
  spin?: boolean;
  value?: number;
  variant?: Variant;
  size?: Size;
  thickness?: number;
  color?: Color;
  gap?: Gap;
  componentsProps?: CircularProgressComponentsProps;
  label?: boolean;
};

export type CircularProgressConfigProps = MergeProps<
  UnstyledSpinnerConfigProps,
  CircularProgressDefaultProps
>;

export type CircularProgressProps = MergeProps<
  UnstyledSpinnerProps,
  CircularProgressDefaultProps & CircularProgressOptionalProps
>;
