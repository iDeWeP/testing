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

export type UnstyledLoaderBarProps = ComponentRefProps<'circle'>;

export type UnstyledLoaderComponentsProps = {
  bar?: UnstyledLoaderBarProps;
  innerBorder?: UnstyledLoaderBarProps;
  outerBorder?: UnstyledLoaderBarProps;
};

export type UnstyledLoaderOptionalProps = {
  disabled?: boolean;
};

export type UnstyledLoaderDefaultProps = {
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
  ring?: Ring;
  componentsProps?: UnstyledLoaderComponentsProps;
};

export type UnstyledLoaderConfigProps = UnstyledLoaderDefaultProps;

export type UnstyledLoaderProps = MergeProps<
  ComponentPropsWithRef<'svg'>,
  UnstyledLoaderDefaultProps & UnstyledLoaderOptionalProps
>;
