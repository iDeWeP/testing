import type { ComponentPropsWithRef } from 'react';
import type {
  ComponentRefProps,
  Variant,
  Size,
  Margin,
  SpinnerBorder,
  Color,
  Ring,
  MergeProps
} from '../../types';

export type UnstyledSpinnerBarProps = ComponentRefProps<'circle'>;

export type UnstyledSpinnerComponentsProps = {
  bar?: UnstyledSpinnerBarProps;
  trail?: UnstyledSpinnerBarProps;
  innerBorder?: UnstyledSpinnerBarProps;
  outerBorder?: UnstyledSpinnerBarProps;
};

type OptionalProps = {
  disabled?: boolean;
  trail?: boolean;
};

type DefaultProps = {
  spin?: boolean;
  value?: number;
  variant?: Variant;
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
  ring?: Ring;
  componentsProps?: UnstyledSpinnerComponentsProps;
};

export type UnstyledSpinnerConfigProps = DefaultProps;

export type UnstyledSpinnerProps = MergeProps<
  ComponentPropsWithRef<'svg'>,
  DefaultProps & OptionalProps
>;
