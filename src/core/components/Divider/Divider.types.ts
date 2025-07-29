import type { ElementType } from 'react';
import type {
  Orientation,
  CrossPlacement,
  Padding,
  Font,
  Color,
  MergeProps
} from '../../types';
import type {
  UnstyledDividerLineProps,
  UnstyledDividerConfigProps,
  UnstyledDividerProps
} from '../UnstyledDivider/UnstyledDivider.types';

export type DividerLineProps = UnstyledDividerLineProps;

export type DividerComponentsProps = {
  startLine?: DividerLineProps;
  endLine?: DividerLineProps;
};

type DefaultProps = {
  orientation?: Orientation;
  placement?: CrossPlacement;
  padding?: Padding;
  font?: Font;
  color?: Color;
  componentsProps?: DividerComponentsProps;
};

export type DividerConfigProps = MergeProps<
  UnstyledDividerConfigProps,
  DefaultProps
>;

export type DividerProps<E extends ElementType> = MergeProps<
  UnstyledDividerProps<E>,
  DefaultProps
>;
