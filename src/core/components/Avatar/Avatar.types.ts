import type { ElementType } from 'react';
import type { Variant, Size, Color, MergeProps } from '../../types';
import type {
  UnstyledAvatarConfigProps,
  UnstyledAvatarProps
} from '../UnstyledAvatar/UnstyledAvatar.types';

export type AvatarDefaultProps = {
  initials?: boolean;
  variant?: Variant;
  size?: Size;
  color?: Color;
  ring?: Color;
};

export type AvatarConfigProps = MergeProps<
  UnstyledAvatarConfigProps,
  AvatarDefaultProps
>;

export type AvatarProps<E extends ElementType> = MergeProps<
  UnstyledAvatarProps<E>,
  AvatarDefaultProps
>;
