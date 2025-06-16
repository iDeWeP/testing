import type {
  ComponentRefProps,
  Variant,
  Size,
  Margin,
  Color,
  MergeProps
} from '../../types';

export type UnstyledSpinnerComponentProps = {
  bar?: ComponentRefProps<'circle'>;
  trail?: ComponentRefProps<'circle'>;
  innerBorder?: ComponentRefProps<'circle'>;
  outerBorder?: ComponentRefProps<'circle'>;
};

export type UnstyledSpinnerConfigProps = {
  spin?: boolean;
  disabled?: boolean;
  value?: number;
  variant?: Variant;
  float?: boolean;
  size?: Size;
  thickness?: number;
  margin?: Margin;
  border?: boolean;
  color?: Color;
  componentsProps?: UnstyledSpinnerComponentProps;
};

export type UnstyledSpinnerDefaultProps = UnstyledSpinnerConfigProps;

export type UnstyledSpinnerProps = MergeProps<
  ComponentRefProps<'svg'>,
  UnstyledSpinnerDefaultProps
>;
