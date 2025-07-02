import type {
  ComponentRefProps,
  Variant,
  DefaultSize,
  SizeScale,
  Margin,
  Color,
  MergeProps
} from '../../types';

export type UnstyledSpinnerComponentsProps = {
  bar?: ComponentRefProps<'circle'>;
  trail?: ComponentRefProps<'circle'>;
  innerBorder?: ComponentRefProps<'circle'>;
  outerBorder?: ComponentRefProps<'circle'>;
};

type OptionalProps = {
  disabled?: boolean;
  trail?: boolean;
};

export type UnstyledSpinnerDefaultProps = {
  spin?: boolean;
  value?: number;
  variant?: Variant;
  float?: boolean;
  size?: DefaultSize;
  thickness?: number;
  scale?: SizeScale;
  margin?: Margin;
  border?: boolean;
  color?: Color;
  componentsProps?: UnstyledSpinnerComponentsProps;
};

export type UnstyledSpinnerConfigProps = UnstyledSpinnerDefaultProps;

export type UnstyledSpinnerProps = MergeProps<
  ComponentRefProps<'svg'>,
  UnstyledSpinnerDefaultProps & OptionalProps
>;
