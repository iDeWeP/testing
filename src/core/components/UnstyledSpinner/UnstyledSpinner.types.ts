import type {
  ComponentRefProps,
  Variant,
  Size,
  DefaultScale,
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

export type UnstyledSpinnerDefaultProps = {
  spin?: boolean;
  disabled?: boolean;
  value?: number;
  variant?: Variant;
  float?: boolean;
  size?: Size;
  scale?: DefaultScale;
  thickness?: number;
  margin?: Margin;
  border?: boolean;
  color?: Color;
  componentsProps?: UnstyledSpinnerComponentProps;
};

export type UnstyledSpinnerConfigProps = UnstyledSpinnerDefaultProps;

export type UnstyledSpinnerProps = MergeProps<
  ComponentRefProps<'svg'>,
  UnstyledSpinnerDefaultProps
>;
