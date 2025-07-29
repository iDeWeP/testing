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

type OptionalProps = {
  max?: number;
  total?: number;
};

type DefaultProps = {
  orientation?: Orientation;
  gap?: GroupGap;
  componentsProps?: AvatarGroupComponentsProps;
  surplus?: boolean;
};

export type AvatarGroupConfigProps = MergeProps<
  UnstyledGroupConfigProps,
  DefaultProps
>;

export type AvatarGroupProps<E extends ElementType> = MergeProps<
  UnstyledGroupProps<E>,
  DefaultProps & OptionalProps
>;
