import type { ElementType } from 'react';
import type {
  Variant,
  Orientation,
  Padding,
  Color,
  Gap,
  MergeProps
} from '../../types';
import type {
  UnstyledListItemRippleProps,
  UnstyledListItemConfigProps,
  UnstyledListItemProps
} from '../UnstyledListItem/UnstyledListItem.types';

export type ListItemRippleProps = UnstyledListItemRippleProps;

export type ListItemComponentsProps = {
  ripple?: ListItemRippleProps;
};

type DefaultProps = {
  variant?: Variant;
  orientation?: Orientation;
  padding?: Padding;
  color?: Color;
  gap?: Gap;
  componentsProps?: ListItemComponentsProps;
};

export type ListItemConfigProps = MergeProps<
  UnstyledListItemConfigProps,
  DefaultProps
>;

export type ListItemProps<E extends ElementType> = MergeProps<
  UnstyledListItemProps<E>,
  DefaultProps
>;
