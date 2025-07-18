import type { ElementType } from 'react';
import type {
  MergeProps,
  Variant,
  Size,
  Border,
  DefaultBorder,
  Radius,
  Color,
  Shadow,
  Gap,
  Orientation,
  Spacing
} from '../../types';
import type { UnstyledContainerProps } from '../UnstyledContainer/UnstyledContainer.types';
import type {
  UnstyledGroupConfigProps,
  UnstyledGroupProps
} from '../UnstyledGroup/UnstyledGroup.types';

export type AvatarGroupSurplusProps = MergeProps<
  UnstyledContainerProps<'div'>,
  {
    initials?: boolean;
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
    ring?: Color;
    shadow?: Shadow;
    gap?: Gap;
  }
>;

export type AvatarGroupComponentsProps = {
  surplus?: AvatarGroupSurplusProps;
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
