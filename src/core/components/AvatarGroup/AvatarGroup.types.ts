import type { ElementType } from 'react';
import type { Orientation, GroupGap, MergeProps } from '../../types';
import type { UnstyledAvatarProps } from '../UnstyledAvatar/UnstyledAvatar.types';
import type {
  UnstyledGroupConfigProps,
  UnstyledGroupProps
} from '../UnstyledGroup/UnstyledGroup.types';

export type AvatarGroupSurplusProps = UnstyledAvatarProps<'div'>;

export type AvatarGroupComponentsProps = {
  surplus?: AvatarGroupSurplusProps;
};

export type AvatarGroupOptionalProps = {
  max?: number;
  total?: number;
};

export type AvatarGroupDefaultProps = {
  orientation?: Orientation;
  gap?: GroupGap;
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
