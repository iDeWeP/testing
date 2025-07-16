import type { ElementType } from 'react';
import type {
  Orientation,
  CrossPlacement,
  Padding,
  Font,
  Color,
  Gap,
  MergeProps
} from '../../types';
import type {
  UnstyledDividerStartLineProps,
  UnstyledDividerEndLineProps,
  UnstyledDividerConfigProps,
  UnstyledDividerProps
} from '../UnstyledDivider/UnstyledDivider.types';

export type DividerStartLineProps = UnstyledDividerStartLineProps;
export type DividerEndLineProps = UnstyledDividerEndLineProps;

export type DividerComponentsProps = {
  startLine?: DividerStartLineProps;
  endLine?: DividerEndLineProps;
};

export type DividerDefaultProps = {
  orientation?: Orientation;
  placement?: CrossPlacement;
  padding?: Padding;
  font?: Font;
  color?: Color;
  gap?: Gap;
  componentsProps?: DividerComponentsProps;
};

export type DividerConfigProps = MergeProps<
  UnstyledDividerConfigProps,
  DividerDefaultProps
>;

export type DividerProps<E extends ElementType> = MergeProps<
  UnstyledDividerProps<E>,
  DividerDefaultProps
>;
