import type { ElementType } from 'react';
import type {
  Variant,
  Size,
  Radius,
  Color,
  Shadow,
  MergeProps
} from '../../types';
import type {
  UnstyledContainerConfigProps,
  UnstyledContainerProps
} from '../UnstyledContainer/UnstyledContainer.types';

export type AvatarDefaultProps = {
  initials?: boolean;
  variant?: Variant;
  size?: Size;
  radius?: Radius;
  color?: Color;
  shadow?: Shadow;
};

export type AvatarConfigProps = MergeProps<
  UnstyledContainerConfigProps,
  AvatarDefaultProps
>;

export type AvatarProps<E extends ElementType> = MergeProps<
  UnstyledContainerProps<E>,
  AvatarDefaultProps
>;
