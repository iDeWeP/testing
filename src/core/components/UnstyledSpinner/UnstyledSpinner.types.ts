import type { ComponentPropsWithRef } from 'react';
import type {
  ComponentRefProps,
  Variant,
  DefaultSize,
  Scale,
  Margin,
  Color,
  MergeProps
} from '../../types';

export type UnstyledSpinnerBarProps = ComponentRefProps<'circle'>;
export type UnstyledSpinnerTrailProps = ComponentRefProps<'circle'>;
export type UnstyledSpinnerInnerBorder = ComponentRefProps<'circle'>;
export type UnstyledSpinnerOuterBorder = ComponentRefProps<'circle'>;

export type UnstyledSpinnerComponentsProps = {
  bar?: UnstyledSpinnerBarProps;
  trail?: UnstyledSpinnerTrailProps;
  innerBorder?: UnstyledSpinnerInnerBorder;
  outerBorder?: UnstyledSpinnerOuterBorder;
};

type UnstyledSpinnerOptionalProps = {
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
  scale?: Scale;
  margin?: Margin;
  mx?: Margin;
  my?: Margin;
  mt?: Margin;
  mb?: Margin;
  ml?: Margin;
  mr?: Margin;
  border?: boolean;
  color?: Color;
  componentsProps?: UnstyledSpinnerComponentsProps;
};

export type UnstyledSpinnerConfigProps = UnstyledSpinnerDefaultProps;

export type UnstyledSpinnerProps = MergeProps<
  ComponentPropsWithRef<'svg'>,
  UnstyledSpinnerDefaultProps & UnstyledSpinnerOptionalProps
>;
