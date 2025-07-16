import type { ElementType } from 'react';
import type {
  Variant,
  Size,
  Border,
  DefaultBorder,
  Radius,
  Color,
  Shadow,
  ComponentRefProps,
  Orientation,
  Spacing,
  Gap,
  MergeProps
} from '../../types';
import type {
  UnstyledGroupConfigProps,
  UnstyledGroupProps
} from '../UnstyledGroup/UnstyledGroup.types';

export type AvatarGroupsurplusProps = {
  as?: ElementType;
  variant?: Variant;
  size?: Size;
  border?: Border;
  b?: DefaultBorder;
  bx?: DefaultBorder;
  by?: DefaultBorder;
  bt?: DefaultBorder;
  bb?: DefaultBorder;
  bl?: DefaultBorder;
  br?: DefaultBorder;
  radius?: Radius;
  r?: Radius;
  rt?: Radius;
  rb?: Radius;
  rl?: Radius;
  rr?: Radius;
  rtl?: Radius;
  rtr?: Radius;
  rbl?: Radius;
  rbr?: Radius;
  color?: Color;
  shadow?: Shadow;
} & ComponentRefProps<'div'>;

export type AvatarGroupComponentsProps = {
  surplus?: AvatarGroupsurplusProps;
};

export type AvatarGroupOptionalProps = {
  max?: number;
  total?: number;
};

export type AvatarGroupDefaultProps = {
  orientation?: Orientation;
  spacing?: Spacing;
  gap?: Gap;
  componentsProps?: AvatarGroupComponentsProps;
  surplus?: boolean;
};

export type AvatarGroupConfigProps = MergeProps<
  UnstyledGroupConfigProps,
  AvatarGroupDefaultProps
>;

export type AvatarGroupProps<E extends ElementType> = MergeProps<
  UnstyledGroupProps<E>,
  AvatarGroupDefaultProps & AvatarGroupOptionalProps
>;
