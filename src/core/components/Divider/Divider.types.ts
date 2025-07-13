import type { ElementType, ComponentPropsWithRef } from 'react';
import type {
  ComponentRefProps,
  Variant,
  Orientation,
  CrossPlacement,
  Padding,
  Margin,
  Font,
  Color,
  Shadow,
  Gap,
  MergeProps
} from '../../types';

export type DividerLeftLineProps = ComponentRefProps<'hr'>;
export type DividerRightLineProps = ComponentRefProps<'hr'>;

export type DividerComponentsProps = {
  leftLine?: DividerLeftLineProps;
  rightLine?: DividerRightLineProps;
};

export type DividerDefaultProps = {
  as?: ElementType;
  variant?: Variant;
  orientation?: Orientation;
  placement?: CrossPlacement;
  padding?: Padding;
  px?: Padding;
  py?: Padding;
  pt?: Padding;
  pb?: Padding;
  pl?: Padding;
  pr?: Padding;
  margin?: Margin;
  mx?: Margin;
  my?: Margin;
  mt?: Margin;
  mb?: Margin;
  ml?: Margin;
  mr?: Margin;
  font?: Font;
  color?: Color;
  shadow?: Shadow;
  gap?: Gap;
  componentsProps?: DividerComponentsProps;
};

export type DividerConfigProps = DividerDefaultProps;

export type DividerProps<E extends ElementType> = MergeProps<
  ComponentPropsWithRef<E>,
  DividerDefaultProps
>;
