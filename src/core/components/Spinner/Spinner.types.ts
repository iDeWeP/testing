import type {
  ComponentRefProps,
  Variant,
  DefaultSize,
  DefaultScale,
  Margin,
  SpinnerBorder,
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
  float?: boolean;
  size?: DefaultSize;
  thickness?: number;
  scale?: DefaultScale;
  margin?: Margin;
  mx?: Margin;
  my?: Margin;
  mt?: Margin;
  mb?: Margin;
  ml?: Margin;
  mr?: Margin;
  border?: SpinnerBorder;
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
