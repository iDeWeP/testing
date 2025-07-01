import type {
  ComponentRefProps,
  Variant,
  Size,
  DefaultScale,
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

export type UnstyledSpinnerDefaultProps = {
  spin?: boolean;
  disabled?: boolean;
  value?: number;
  variant?: Variant;
  float?: boolean;
  size?: Size;
  thickness?: number;
  scale?: DefaultScale;
  margin?: Margin;
  border?: boolean;
  color?: Color;
  componentsProps?: UnstyledSpinnerComponentsProps;
};

export type UnstyledSpinnerConfigProps = UnstyledSpinnerDefaultProps;

export type UnstyledSpinnerProps = MergeProps<
  ComponentRefProps<'svg'>,
  UnstyledSpinnerDefaultProps
>;
