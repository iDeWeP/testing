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
  UnstyledCardConfigProps,
  UnstyledCardProps
} from '../UnstyledCard/UnstyledCard.types';

export type AvatarGroupsurplusProps<S extends ElementType> = {
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
} & ComponentRefProps<S>;

export type AvatarGroupComponentsProps<S extends ElementType> = {
  surplus?: AvatarGroupsurplusProps<S>;
};

export type AvatarGroupOptionalProps = {
  max?: number;
  total?: number;
};

export type AvatarGroupDefaultProps<S extends ElementType> = {
  orientation?: Orientation;
  spacing?: Spacing;
  gap?: Gap;
  componentsProps?: AvatarGroupComponentsProps<S>;
  surplus?: boolean;
};

export type AvatarGroupConfigProps<S extends ElementType> = MergeProps<
  UnstyledCardConfigProps,
  AvatarGroupDefaultProps<S>
>;

export type AvatarGroupProps<
  E extends ElementType,
  S extends ElementType
> = MergeProps<
  UnstyledCardProps<E>,
  AvatarGroupDefaultProps<S> & AvatarGroupOptionalProps
>;
