import type { ComponentPropsWithRef } from 'react';
import type {
  ComponentRefProps,
  Variant,
  Size,
  Margin,
  SpinnerBorder,
  Color,
  MergeProps
} from '../../types';

export type UnstyledSpinnerBarProps = ComponentRefProps<'circle'>;

export type UnstyledSpinnerComponentsProps = {
  bar?: UnstyledSpinnerBarProps;
  trail?: UnstyledSpinnerBarProps;
  innerBorder?: UnstyledSpinnerBarProps;
  outerBorder?: UnstyledSpinnerBarProps;
};

export type UnstyledSpinnerOptionalProps = {
  disabled?: boolean;
  trail?: boolean;
};

export type UnstyledSpinnerDefaultProps = {
  spin?: boolean;
  value?: number;
  variant?: Variant;
  float?: boolean;
  size?: Size;
  thickness?: number;
  margin?: Margin;
  m?: Margin;
  mx?: Margin;
  my?: Margin;
  mt?: Margin;
  mb?: Margin;
  ml?: Margin;
  mr?: Margin;
  border?: SpinnerBorder;
  color?: Color;
  ring?: Color;
  componentsProps?: UnstyledSpinnerComponentsProps;
};

export type UnstyledSpinnerConfigProps = UnstyledSpinnerDefaultProps;

export type UnstyledSpinnerProps = MergeProps<
  ComponentPropsWithRef<'svg'>,
  UnstyledSpinnerDefaultProps & UnstyledSpinnerOptionalProps
>;
