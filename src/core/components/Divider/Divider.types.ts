import type { ElementType, ComponentPropsWithRef } from 'react';
import type {
  ComponentRefProps,
  Orientation,
  CrossPlacement,
  Padding,
  Margin,
  Font,
  Color,
  Gap,
  MergeProps
} from '../../types';

export type DividerStartLineProps = ComponentRefProps<'hr'>;
export type DividerEndLineProps = ComponentRefProps<'hr'>;

export type DividerComponentsProps = {
  startLine?: DividerStartLineProps;
  endLine?: DividerEndLineProps;
};

export type DividerDefaultProps = {
  as?: ElementType;
  orientation?: Orientation;
  placement?: CrossPlacement;
  padding?: Padding;
  p?: Padding;
  px?: Padding;
  py?: Padding;
  pt?: Padding;
  pb?: Padding;
  pl?: Padding;
  pr?: Padding;
  margin?: Margin;
  m?: Margin;
  mx?: Margin;
  my?: Margin;
  mt?: Margin;
  mb?: Margin;
  ml?: Margin;
  mr?: Margin;
  font?: Font;
  color?: Color;
  gap?: Gap;
  componentsProps?: DividerComponentsProps;
};

export type DividerConfigProps = DividerDefaultProps;

export type DividerProps<E extends ElementType> = MergeProps<
  ComponentPropsWithRef<E>,
  DividerDefaultProps
>;
