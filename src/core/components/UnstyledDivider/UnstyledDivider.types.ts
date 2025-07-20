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

export type UnstyledDividerLineProps = ComponentRefProps<'hr'>;

export type UnstyledDividerComponentsProps = {
  startLine?: UnstyledDividerLineProps;
  endLine?: UnstyledDividerLineProps;
};

export type UnstyledDividerDefaultProps = {
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
  componentsProps?: UnstyledDividerComponentsProps;
};

export type UnstyledDividerConfigProps = UnstyledDividerDefaultProps;

export type UnstyledDividerProps<E extends ElementType> = MergeProps<
  ComponentPropsWithRef<E>,
  UnstyledDividerDefaultProps
>;
